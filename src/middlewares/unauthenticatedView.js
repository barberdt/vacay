'use strict';

// @TODO docs
const unauthenticatedView = function *(next) {
  if (!this.isAuthenticated()) {
    yield next;
  } else {
    this.redirect('/');
  }
};

module.exports = unauthenticatedView;
