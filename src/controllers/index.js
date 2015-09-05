'use strict';

const signupController = require('./signup');
const tripController = require('./trip');
const viewController = require('./view');


const controllers = {
  viewController: viewController,
  signupController: signupController,
  tripController: tripController
};

module.exports = controllers;
