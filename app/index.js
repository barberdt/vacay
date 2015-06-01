const App = require('./App');
const React = require('react/addons');
const Router = require('react-router');

const Route = Router.Route;

console.log('This is Vacay. Plan a trip!');

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