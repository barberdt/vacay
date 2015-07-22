const alt = require('dispatchers/alt');
const TripStore = require('../stores/TripStore');


/**
 * Actions specific to the Root component.
 *
 * Generated void actions:
 * - resetSuccess
 * - resetFailure
 */
class RootActions {
  constructor() {
    this.generateActions('resetSuccess', 'resetFailure');
  }

  /**
   * The reset action for the component. Fetches the data from the content
   * store.
   */
  reset() {
    TripStore.fetchTrips()
      .then(() => {
        this.actions.resetSuccess();
      })
      .catch(() => {
        this.actions.resetFaliure();
      });
  }
}

module.exports = alt.createActions(RootActions);
