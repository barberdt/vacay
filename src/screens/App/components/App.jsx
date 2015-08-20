const Immutable = require('immutable');
const React = require('react/addons');
const Router = require('react-router');


const RouteHandler = Router.RouteHandler;

/**
 * The root-level app component. This component uses connectToStores.
 */
const App = React.createClass({
  propTypes: {
    /**
     * Whether or not the component is in a loading state.
     */
    isLoading: React.PropTypes.bool.isRequired,
    /**
     * The trips to display.
     */
    trips: React.PropTypes.instanceOf(Immutable.Map)
  },

  render() {
    const { isLoading } = this.props;

    return (
      <div className="Vacay">
        <h1>Vacay</h1>
        <h2>Plan a trip!</h2>
        {isLoading ? 'Loading' : 'Not loading'}
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
