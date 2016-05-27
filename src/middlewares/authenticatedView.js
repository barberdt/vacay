// @TODO docs
module.exports = function* authenticatedView(next) {
  if (this.isAuthenticated()) {
    yield next;
  } else {
    this.redirect('/login');
  }
};
