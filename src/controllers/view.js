const normalizeUrl = '/css/normalize.css';
const commonsScriptUrl = '/js/commons.js';

/**
 * Controller for rendering views.
 */
module.exports = {
  /**
   * Render the view for the app's index.
   */
  index: function* index() {
    this.body = yield this.render('index', {
      normalizeUrl,
      commonsScriptUrl,
      scriptUrl: '/js/vacay.js',
    });
  },

  /**
   * Render the view for the login page.
   */
  login: function* login() {
    this.body = yield this.render('login', {
      normalizeUrl,
      commonsScriptUrl,
      scriptUrl: '/js/login.js',
    });
  },

  /**
   * Render the view for the signup page.
   */
  signup: function* signup() {
    this.body = yield this.render('signup', {
      normalizeUrl,
      commonsScriptUrl,
      scriptUrl: '/js/signup.js',
    });
  },
};
