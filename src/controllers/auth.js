'use strict';

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
  login: function *() {
    this.validate('email').required();
    this.validate('password').required();
    this.assert(!this.fieldErrors, 400, { fields: this.fieldErrors });

    // Validate the existence of an account for the given email address.
    const existingUser = yield User.findOne({
      email: this.request.body.email.toLowerCase()
    });
    this.assert(existingUser, 400, 'No account exists for that email address.');

    const _this = this;
    yield* passport.authenticate('local', function *(err, user) {
      if (err) {
        _this.throw(err);
      }

      _this.assert(user, 401, 'Invalid password.');

      yield _this.login(user);
      _this.body = user;
    }).call(this);
  },

  /**
   * Log out.
   */
  logout: function *() {
    this.logout();
    this.session = null;
    this.status = 204;
  },

  /**
   * Sign up the requested new user and log them in.
   */
  signup: function *() {
    this.validate('email').required().notEmpty().email();
    this.validate('first').notEmpty().required();
    this.validate('last').required().notEmpty();
    this.validate('password').required().notEmpty();
    this.assert(!this.fieldErrors, 400, { fields: this.fieldErrors });

    const body = this.request.body;

    // Validate that an existing user with that email does not already exist.
    const existingUser = yield User.findOne({ email: body.email.toLowerCase() });
    this.assert(!existingUser, 400, 'An account already exists for that email address.');

    // Create the new user, save them, log in, and return as response body.
    let newUser = new User(body);
    newUser = yield newUser.save();
    yield this.login(newUser);
    this.body = newUser;
  }
};
