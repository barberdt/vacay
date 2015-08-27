"use strict";

const mongoose = require('mongoose');
const koa = require('koa');
const path = require('path');
const Router = require('koa-router');
const views = require('co-views');


// App
const app = koa();
app.name = 'Vacay';

// Views
app.use(function *(next) {
  const root = path.normalize(path.join(__dirname, '/..'));
  this.render = views(root + '/src/views', {
    map: { html: 'swig' },
    cache: 'memory',
  });
  yield next;
});

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
  this.body = yield this.render('index', {
    scriptUrl: 'foobar'
  });
});

router.get('/trips', function* () {
  const trips = yield Trip.find().exec();
  this.body = { trips: trips };
});

app.use(router.routes());

app.listen(5000);
