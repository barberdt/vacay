// @TODO docs
module.exports = function* unauthenticatedView(next) {
  if (!this.isAuthenticated()) {
    yield next;
  } else {
    this.redirect('/');
  }
};
