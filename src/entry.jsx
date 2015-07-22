const React = require('react/addons');
const Router = require('react-router');

const App = require('./screens/App');
const OtherTest = require('./screens/App/screens/OtherTest');
const Test = require('./screens/App/screens/Test');


const Route = Router.Route;

const routes = (
  <Route handler={App}>
    <Route path="test" handler={Test} />
    <Route path="other-test" handler={OtherTest} />
  </Route>
);

document.addEventListener('DOMContentLoaded', () => {
  Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root />, document.body);
  });
});
