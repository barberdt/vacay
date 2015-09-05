'use strict';

const appConfig = require('./config/app');
const fs = require('fs');
const koa = require('koa');
const koaConfig = require('./config/koa');
const mongoose = require('mongoose');
const passport = require('koa-passport');


// Connect mongo
mongoose.connect(appConfig.mongoUrl);

// Load models
const modelsPath = appConfig.root + '/src/models';

fs.readdirSync(modelsPath).forEach(function(file) {
  if (~file.indexOf('js')) {
    require(`${modelsPath}/${file}`);
  }
});

// Create koa app instance
const app = koa();

// Configure passport
// Require must happens after models have been loaded
require('./config/passport')(passport);

// Configure app
// Must occurr after passport config
koaConfig(app, passport);

// Configure routes
// Require must happen after models have been loaded
require('./config/routes')(app);

app.listen(5000);
