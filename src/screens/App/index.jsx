const React = require('react/addons');
const Router = require('react-router');
const TripActions = require('./actions/TripActions');
const TripStore = require('./stores/TripStore');

const RouteHandler = Router.RouteHandler;

const Root = React.createClass({
  getInitialState() {
    return TripStore.getState();
  },

  componentWillMount() {
    TripStore.listen(() => {
      this.setState(TripStore.getState());
    });

    if (!TripStore.getState().loaded) {
      TripActions.loadTrips();
    }
  },

  render() {
    let loadingMessage;

    if (this.state.loading) {
      loadingMessage = 'Currently loading';
    } else {
      loadingMessage = 'Not currently loading';
    }

    return (
      <div className="Vacay">
        <h1>Vacay</h1>
        <h2>Plan a trip!</h2>
        {loadingMessage}
        <RouteHandler />
      </div>
    );
  }
});

module.exports = Root;