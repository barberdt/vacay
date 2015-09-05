'use strict';

const authenticated = require('../src/middlewares/authenticated');
const Router = require('koa-router');
const controllers = require('../src/controllers')


const viewController = controllers.viewController;
const signupController = controllers.signupController;
const tripController = controllers.tripController;

/**
 * Configure routes.
 *
 * @param {Object} app - The Koa app instance.
 */
const routerConfig = function(app) {
  const router = new Router();

  // Index
  router.get('/', viewController.index);

  // Login
  router.get('/login', viewController.login);

  // Signup
  router.get('/signup', viewController.signup);
  router.post('/signup', signupController.signup);

  // Api
  router.post('/api/trips', authenticated, tripController.createOne);
  router.get('/api/trips', authenticated, tripController.getAll);
  router.get('/api/trips/:id', authenticated, tripController.getOne);

  // Catch-all
  router.get('*', viewController.index);

  app.use(router.routes());
  app.use(router.allowedMethods());
};

module.exports = routerConfig;
