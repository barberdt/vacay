const connectToStores = require('alt/utils/connectToStores');
const AppActions = require('./actions/AppActions');
const AppStore = require('./stores/AppStore');

const App = require('./components/App');


const connectedApp = connectToStores({
  getStores() {
    return [AppStore];
  },

  getPropsFromStores() {
    return AppStore.getState().toObject();
  },

  componentDidConnect() {
    AppActions.reset();
  }
}, App);

module.exports = connectedApp;
