'use strict';

const authenticated = require('../src/middlewares/authenticated');
const authenticatedView = require('../src/middlewares/authenticatedView');
const unauthenticatedView = require('../src/middlewares/unauthenticatedView');
const Router = require('koa-router');
const controllers = require('../src/controllers')


const viewController = controllers.viewController;
const authController = controllers.authController;
const tripController = controllers.tripController;

/**
 * Configure routes.
 *
 * @param {Object} app - The Koa app instance.
 */
const routerConfig = function(app) {
  const router = new Router();

  // Views
  router.get('/', authenticatedView, viewController.index);
  router.get('/login', unauthenticatedView, viewController.login);
  router.get('/signup', unauthenticatedView, viewController.signup);

  // Auth
  router.post('/auth/login', authController.login);
  // @TODO get on logout is temporary, remove it
  router.get('/auth/logout', authController.logout);
  router.post('/auth/logout', authController.logout);
  router.post('/auth/signup', authController.signup);

  // Api
  router.post('/api/trips', authenticated, tripController.createOne);
  router.get('/api/trips', authenticated, tripController.getAll);
  router.get('/api/trips/:id', authenticated, tripController.getOne);

  // Catch-all
  router.get('*', authenticatedView, viewController.index);

  app.use(router.routes());
  app.use(router.allowedMethods());
};

module.exports = routerConfig;
