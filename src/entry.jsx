const App = require('./screens/App');
const React = require('react/addons');
const Router = require('react-router');

const Route = Router.Route;
const routes = <Route handler={App} />;

document.addEventListener('DOMContentLoaded', () => {
  Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root />, document.body);
  });
});