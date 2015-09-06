import { Map as ImmutableMap } from 'immutable';
import React from 'react/addons';
import { RouteHandler } from 'react-router';

import TripActions from 'actions/TripActions';


export default React.createClass({
  handleClick() {
    TripActions.create(ImmutableMap({
      name: 'Foobar'
    }));
  },

  render() {
    return (
      <div>
        <div onClick={this.handleClick}>This is a test.</div>
        <RouteHandler />
      </div>
    );
  }
});
