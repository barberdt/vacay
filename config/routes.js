'use strict';

const Router = require('koa-router');
const controllers = require('../src/controllers')


/**
 * Configure routes.
 *
 * @param {Object} app - The Koa app instance.
 */
const routerConfig = (app) => {
  const router = new Router();

  // Index
  router.get('/', function *() {
    this.type = 'html';
    try {
      this.body = yield this.render('index', {
        scriptUrl: '/js/vacay.js'
      });
    } catch (error) {
      console.log(error);
    }
  });

  // Api
  router.get('/api/trips', controllers.tripController.getAll);
  router.get('/api/trips/:id', controllers.tripController.getOne);

  // Catch-all
  router.get('/:path', function *() {
    this.type = 'html';
    try {
      this.body = yield this.render('index', {
        scriptUrl: '/js/vacay.js'
      });
    } catch (error) {
      console.log(error);
    }
  });

  app.use(router.routes());
};

module.exports = routerConfig;
