const Immutable = require('immutable');
const React = require('react/addons');

const TripActions = require('../../actions/TripActions');


const Test = React.createClass({
  handleClick() {
    TripActions.create(Immutable.Map({
      name: 'Foobar'
    }));
  },

  render() {
    return <div onClick={this.handleClick}>This is a test.</div>;
  }
});

module.exports = Test;
