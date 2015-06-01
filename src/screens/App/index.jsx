const React = require('react/addons');
const Router = require('react-router');

const Link = Router.Link;
const RouteHandler = Router.RouteHandler;

const Root = React.createClass({
  render() {
    return (
      <div className="Vacay">
        <h1>Vacay</h1>
        <h2>Plan a trip!</h2>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
        <Link to="/other-test">Other Test</Link>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = Root;