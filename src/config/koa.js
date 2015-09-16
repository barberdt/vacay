'use strict';

const appConfig = require('./app');
const bodyParser = require('koa-body');
const validate = require('koa-validate');
const redisStore = require('koa-redis');
const serve = require('koa-static');
const session = require('koa-generic-session');
const views = require('co-views');


/**
 * Config for the Koa app.
 *
 * @param {Object} app - The Koa app instance.
 * @param {Object} passport - The configured passport instance.
 */
module.exports = (app, passport) => {
  app.name = appConfig.name;
  app.keys = appConfig.keys;

  // Error handling
  app.use(function *(next) {
    try {
      yield next;
    } catch (error) {
      const status = error.status || 500;
      const message = error.message || 'Internal server error.';
      const body = { status, message };

      if (error.fields) {
        body.fields = error.fields;
      }

      this.status = status;
      this.body = body;

      this.app.emit('error', error, this);
    }
  });

  // Session
  app.use(session({ key: 'vacay.sid', store: redisStore() }));

  // Body parsing
  app.use(bodyParser());

  // Field validation
  app.use(validate());

  // Passport
  app.use(passport.initialize());
  app.use(passport.session());

  // View rendering
  app.use(function *(next) {
    this.render = views(`${appConfig.root}/src/views`, {
      map: { html: 'swig' },
      cache: 'memory',
    });
    yield next;
  });

  // Public static serving for dev env
  app.use(serve(`${appConfig.root}/public`));
};
