const connectToStores = require('alt/utils/connectToStores');
const RootActions = require('./actions/RootActions');
const RootStore = require('./stores/RootStore');

const Root = require('./components/Root');


const connectedRoot = connectToStores({
  getStores() {
    return [RootStore];
  },

  getPropsFromStores() {
    return RootStore.getState().toObject();
  },

  componentDidConnect() {
    RootActions.reset();
  }
}, Root);

module.exports = connectedRoot;
