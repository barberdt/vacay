const React = require('react/addons');
const Router = require('react-router');

const Vacay = require('./screens/Vacay');
const OtherTest = require('./screens/Vacay/screens/OtherTest');
const Test = require('./screens/Vacay/screens/Test');


const Route = Router.Route;

const routes = (
  <Route handler={Vacay}>
    <Route path="test" handler={Test} />
    <Route path="other-test" handler={OtherTest} />
  </Route>
);

document.addEventListener('DOMContentLoaded', () => {
  Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root />, document.body);
  });
});
