'use strict';

// @TODO docs
const authenticatedView = function *(next) {
  if (this.isAuthenticated()) {
    yield next;
  } else {
    this.redirect('/login');
  }
};

module.exports = authenticatedView;
