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
    // @TODO validate fields
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
    // @TODO validate non-existing user and fields
    let newUser = new User(this.request.body);
    newUser = yield newUser.save();
    yield this.login(newUser);
    // @TODO why passport user?
    this.body = this.passport.user;
  }
};
