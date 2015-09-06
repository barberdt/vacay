'use strict';

const authController = require('./auth');
const tripController = require('./trip');
const viewController = require('./view');


const controllers = {
  viewController: viewController,
  authController: authController,
  tripController: tripController
};

module.exports = controllers;
