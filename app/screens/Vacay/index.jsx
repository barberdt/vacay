import React from 'react';
import { Route, run, HistoryLocation } from 'react-router';
import connectToStores from 'alt/utils/connectToStores';

import VacayActions from './actions/VacayActions';
import VacayStore from './stores/VacayStore';
import Vacay from './Vacay';
import OtherTest from './screens/OtherTest';
import Test from './screens/Test';

/**
 * The Vacay screen connected to stores.
 */
const ConnectedVacay = connectToStores({
  getStores() {
    return [VacayStore];
  },

  getPropsFromStores() {
    const { isLoading, trips } = VacayStore.getState().toObject();

    return {
      isLoading: isLoading || !trips,
      trips,
    };
  },

  componentDidConnect() {
    VacayActions.reset();
  },
}, Vacay);

/**
 * Global route declaration.
 */
const routes = (
  <Route path="/" name="index" handler={ConnectedVacay}>
    <Route path="test" name="test" handler={Test}>
      <Route path="other-test" name="otherTest" handler={OtherTest} />
    </Route>
  </Route>
);

/**
 * Init react router after DOM has loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  run(routes, HistoryLocation, Root => {
    React.render(<Root />, document.body);
  });
});
