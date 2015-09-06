'use strict';

// @TODO docs
module.exports = function *(next) {
  if (!this.isAuthenticated()) {
    yield next;
  } else {
    this.redirect('/');
  }
};
