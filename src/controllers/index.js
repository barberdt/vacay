'use strict';

const authController = require('./auth');
const tripController = require('./trip');
const viewController = require('./view');


module.exports = {
  viewController: viewController,
  authController: authController,
  tripController: tripController
};
