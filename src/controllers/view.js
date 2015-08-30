'use strict';


/**
 * Controller for rendering views.
 */
const viewController = {
  /**
   * Render the view for the app's index.
   */
  index: function *() {
    this.type = 'html';
    try {
      this.body = yield this.render('index', {
        scriptUrl: '/js/vacay.js'
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = viewController;
