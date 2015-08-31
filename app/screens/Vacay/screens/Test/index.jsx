const Immutable = require('immutable');
const React = require('react/addons');
const Router = require('react-router');

const TripActions = require('actions/TripActions');


const { RouteHandler } = Router;

const Test = React.createClass({
  handleClick() {
    TripActions.create(Immutable.Map({
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

module.exports = Test;
