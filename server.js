'use strict';

const fs = require('fs');
const koa = require('koa');
const mongoose = require('mongoose');
const Router = require('koa-router');
const serve = require('koa-static');
const views = require('co-views');


// App
const app = koa();
app.name = 'Vacay';

// Views
app.use(function *(next) {
  this.render = views(__dirname + '/src/views', {
    map: { html: 'swig' },
    cache: 'memory',
  });
  yield next;
});

// Static
app.use(serve(__dirname + '/src/static'));

// Mongo
mongoose.connect('mongodb://localhost/vacay');

// Load models
const modelsPath = __dirname + '/src/models';

fs.readdirSync(modelsPath).forEach((file) => {
  if (~file.indexOf('js')) {
    require(modelsPath + '/' + file);
  }
});

// Router
const router = new Router();

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

const tripController = require(__dirname + '/src/controllers/trip');
router.get('/api/trips', tripController.getAll);

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

app.listen(5000);
