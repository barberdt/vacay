// @TODO docs
module.exports = function* authenticated(next) {
  this.assert(this.isAuthenticated(), 401, 'Requires authentication.');
  yield next;
};
