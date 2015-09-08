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
    this.validate('username').isRequired();
    this.validate('password').isRequired();
    this.assert(!this.fieldErrors, 400, { fields: this.fieldErrors });

    const _this = this;
    yield* passport.authenticate('local', function *(err, user) {
      if (err) {
        throw err;
      }

      if (user === false) {
        _this.status = 401;
      } else {
        yield _this.login(user);
        _this.body = user;
      }
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
    this.validate('username').isRequired();
    this.validate('password').isRequired();

    // Validate that an existing user with that username does not already exist.
    const existingUser = yield User.findOne({
      username: this.request.body.username
    });

    this.assert(!existingUser, 400, 'A user with that username already exists.');

    let newUser = new User(this.request.body);
    newUser = yield newUser.save();
    yield this.login(newUser);
    this.body = newUser;
  }
};
