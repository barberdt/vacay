const React = require('react/addons');
const Router = require('react-router');

const Route = Router.Route;
const RouteHandler = Router.RouteHandler;

console.log('Welcome to Vacay. Plan a trip!');

const App = React.createClass({
  render() {
    return (
      <div className="Vacay">
        Vacay
        <RouteHandler />
      </div>
    );
  }
});

const Test = React.createClass({
  render() {
    return <div>This is a test</div>;
  }
});

const routes = (
  <Route handler={App}>
    <Route path="/test" handler={Test} />
  </Route>
);

document.addEventListener('DOMContentLoaded', () => {
  Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root />, document.body);
  });
});