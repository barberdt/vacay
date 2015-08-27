const connectToStores = require('alt/utils/connectToStores');
const AppActions = require('./actions/AppActions');
const AppStore = require('./stores/AppStore');

const App = require('./components/App');


const connectedApp = connectToStores({
  getStores() {
    return [AppStore];
  },

  getPropsFromStores() {
    const { isLoading, trips } = AppStore.getState().toObject();

    return {
      isLoading: isLoading || !trips,
      trips
    };
  },

  componentDidConnect() {
    AppActions.reset();
  }
}, App);

module.exports = connectedApp;
