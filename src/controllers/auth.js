const mongoose = require('mongoose');
const passport = require('koa-passport');

const User = mongoose.model('User');

/**
 * The controller for auth-related endpoints.
 */
module.exports = {
  /**
   * Log in.
   */
  login: function* login() {
    this.checkBody('email').notEmpty('Required');
    this.checkBody('password').notEmpty('Required');
    this.assert(!this.errors, 400, { fields: this.errors });

    // Validate the existence of an account for the given email address.
    const email = this.request.body.email.toLowerCase();
    const existingUser = yield User.findOne({ email });
    this.assert(existingUser, 400, 'No account exists for that email address.');

    const self = this;
    yield* passport.authenticate('local', function* completeLogin(err, user) {
      self.assert(!err && user, 401, 'Invalid password.');
      yield self.login(user);
      self.body = user;
    }).call(this);
  },

  /**
   * Log out.
   */
  logout: function* logout() {
    this.logout();
    this.session = null;
    this.status = 204;
  },

  /**
   * Sign up the requested new user and log them in.
   */
  signup: function* signup() {
    this.checkBody('email').notEmpty('Required').isEmail('must be a valid email address');
    this.checkBody('first').notEmpty('Required');
    this.checkBody('last').notEmpty('Required');
    this.checkBody('password').notEmpty('Required');
    this.assert(!this.errors, 400, { fields: this.errors });

    const body = this.request.body;

    // Validate that an existing user with that email does not already exist.
    const existingUser = yield User.findOne({ email: body.email.toLowerCase() });
    this.assert(!existingUser, 400, 'An account already exists for that email address.');

    // Create the new user, save them, log in, and return as response body.
    let newUser = new User(body);
    newUser = yield newUser.save();
    yield this.login(newUser);
    this.body = newUser;
  },
};
