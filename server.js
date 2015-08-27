"use strict";

const mongoose = require('mongoose');
const koa = require('koa');
const Router = require('koa-router');


// App
const app = koa();
app.name = 'Vacay';

// Mongo
mongoose.connect('mongodb://localhost/vacay');

const TripSchema = new mongoose.Schema({
  name: { type: String, default: null }
});

mongoose.model('Trip', TripSchema);

const Trip = mongoose.model('Trip');

// Router
const router = new Router();

router.get('/trips', function* () {
  const trips = yield Trip.find().exec();
  this.body = { trips: trips };
});

app.use(router.routes());

app.listen(5000);
