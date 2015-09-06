import { Map as ImmutableMap } from 'immutable';
import React, { PropTypes } from 'react/addons';
import { Link, RouteHandler } from 'react-router';

import VacayActions from './actions/VacayActions';


/**
 * The root-level app component.
 */
export default React.createClass({
  propTypes: {
    /**
     * Whether or not the component is in a loading state.
     */
    isLoading: PropTypes.bool.isRequired,
    /**
     * The trips to display.
     */
    trips: PropTypes.instanceOf(ImmutableMap)
  },

  logout() {
    VacayActions.logout();
  },

  renderTrips() {
    const numTrips = this.props.trips.size;
    return <div>There are {numTrips} trips.</div>;
  },

  render() {
    const { isLoading } = this.props;

    return (
      <div className="Vacay">
        <h1>Vacay</h1>
        <h2>Plan a trip!</h2>
        <div onClick={this.logout}>Log Out</div>
        <Link to="index">Home</Link>
        <Link to="test">Go To Test</Link>
        {isLoading ? 'Loading' : this.renderTrips()}
        <RouteHandler />
      </div>
    );
  }
});
