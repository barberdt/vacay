'use strict';

const Router = require('koa-router');
const controllers = require('../src/controllers')


const tripController = controllers.tripController;
const viewController = controllers.viewController;

/**
 * Configure routes.
 *
 * @param {Object} app - The Koa app instance.
 */
const routerConfig = (app) => {
  const router = new Router();

  // Index
  router.get('/', viewController.index);

  // Api
  router.post('/api/trips', tripController.createOne);
  router.get('/api/trips', tripController.getAll);
  router.get('/api/trips/:id', tripController.getOne);

  // Catch-all
  router.get('/:path', viewController.index);

  app.use(router.routes());
};

module.exports = routerConfig;
