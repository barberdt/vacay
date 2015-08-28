"use strict";

const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const koa = require('koa');
const path = require('path');
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

const TripSchema = new mongoose.Schema({
  name: { type: String, default: null }
});

mongoose.model('Trip', TripSchema);

const Trip = mongoose.model('Trip');

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

router.get('/api/trips', function *() {
  const trips = yield Trip.find().exec();
  this.body = { trips: trips };
});

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
