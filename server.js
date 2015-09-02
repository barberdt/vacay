'use strict';

const appConfig = require('./config/app');
const fs = require('fs');
const koa = require('koa');
const koaConfig = require('./config/koa');
const mongoose = require('mongoose');


// Connect mongo
mongoose.connect(appConfig.mongoUrl);

// Load models
const modelsPath = appConfig.root + '/src/models';

fs.readdirSync(modelsPath).forEach(function(file) {
  if (~file.indexOf('js')) {
    require(modelsPath + '/' + file);
  }
});

// Create app instance
const app = koa();

// Configure app
koaConfig(app);
require('./config/routes')(app);

app.listen(5000);
