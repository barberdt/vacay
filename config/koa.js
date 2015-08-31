'use strict';

const appConfig = require('./app');
const bodyParser = require('koa-body');
const serve = require('koa-static');
const views = require('co-views');


/**
 * Config for the Koa app.
 *
 * @param {Object} app - The Koa app instance.
 */
const koaConfig = (app) => {
  app.name = 'Vacay';

  // Error handling
  app.use(function *(next) {
    try {
      yield next;
    } catch (error) {
      const status = error.status || 500;
      const message = error.message || 'Internal server error.';

      this.status = status;
      this.body = {
        status: status,
        message: message
      };

      this.app.emit('error', error, this);
    }
  });

  // Body parsing
  app.use(bodyParser());

  // View rendering
  app.use(function *(next) {
    this.render = views(appConfig.root + '/src/views', {
      map: { html: 'swig' },
      cache: 'memory',
    });
    yield next;
  });

  // Static serving
  app.use(serve(appConfig.root + '/src/static'));
};

module.exports = koaConfig;
