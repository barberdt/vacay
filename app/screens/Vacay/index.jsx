const connectToStores = require('alt/utils/connectToStores');
const VacayActions = require('./actions/VacayActions');
const VacayStore = require('./stores/VacayStore');

const Vacay = require('./Vacay');


const connectedVacay = connectToStores({
  getStores() {
    return [VacayStore];
  },

  getPropsFromStores() {
    const { isLoading, trips } = VacayStore.getState().toObject();

    return {
      isLoading: isLoading || !trips,
      trips
    };
  },

  componentDidConnect() {
    VacayActions.reset();
  }
}, Vacay);

module.exports = connectedVacay;
