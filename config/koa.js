'use strict';

const appConfig = require('./app');
const serve = require('koa-static');
const views = require('co-views');


/**
 * Config for the Koa app.
 *
 * @param {Object} app - The Koa app instance.
 */
const koaConfig = (app) => {
  app.name = 'Vacay';

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
