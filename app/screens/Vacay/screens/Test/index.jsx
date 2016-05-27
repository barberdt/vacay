import { Map as iMap } from 'immutable';
import React from 'react';
import { Link, RouteHandler } from 'react-router';

import TripActions from 'actions/TripActions';

export default class extends React.Component {
  handleClick() {
    TripActions.create(iMap({ name: 'Foobar' }));
  }

  render() {
    return (
      <div>
        <div onClick={this.handleClick}>This is a test.</div>
        <Link to="otherTest">Go To Other Test</Link>
        <RouteHandler />
      </div>
    );
  }
}
