'use strict';

const tripController = require('./trip');
const viewController = require('./view');


const controllers = {
  tripController: tripController,
  viewController: viewController
};

module.exports = controllers;
