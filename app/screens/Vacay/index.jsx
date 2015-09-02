const React = require('react/addons');
const Router = require('react-router');

const connectToStores = require('alt/utils/connectToStores');
const VacayActions = require('./actions/VacayActions');
const VacayStore = require('./stores/VacayStore');

const Vacay = require('./Vacay');
const OtherTest = require('./screens/OtherTest');
const Test = require('./screens/Test');


const Route = Router.Route;

/**
 * The Vacay screen connected to stores.
 */
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

/**
 * Global route declaration.
 */
const routes = (
  <Route handler={connectedVacay}>
    <Route path="test" handler={Test}>
      <Route path="other-test" handler={OtherTest} />
    </Route>
  </Route>
);

/**
 * Init react router after DOM has loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root />, document.body);
  });
});
