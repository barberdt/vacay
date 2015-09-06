'use strict';

// @TODO docs
const authenticated = function *(next) {
  if (this.isAuthenticated()) {
    yield next;
  } else {
    this.throw('Requires authentication.', 401);
  }
};

module.exports = authenticated;
