const React = require('react/addons');
const Router = require('react-router');

const RouteHandler = Router.RouteHandler;

const App = React.createClass({
  render() {
    return (
      <div className="Vacay">
        <h1>Vacay</h1>
        <h2>Plan a trip!</h2>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;