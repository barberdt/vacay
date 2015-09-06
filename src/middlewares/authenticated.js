'use strict';

// @TODO docs
module.exports = function *(next) {
  this.assert(this.isAuthenticated(), 401, 'Requires authentication.');
  yield next;
};
