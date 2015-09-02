const React = require('react/addons');
const Router = require('react-router');

const connectToStores = require('alt/utils/connectToStores');
const VacayActions = require('./actions/VacayActions');
const VacayStore = require('./stores/VacayStore');

const Vacay = require('./Vacay');
const OtherTest = require('./screens/OtherTest');
const Test = require('./screens/Test');


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

const Route = Router.Route;

const routes = (
  <Route handler={connectedVacay}>
    <Route path="test" handler={Test}>
      <Route path="other-test" handler={OtherTest} />
    </Route>
  </Route>
);

document.addEventListener('DOMContentLoaded', () => {
  Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root />, document.body);
  });
});
