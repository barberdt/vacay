const React = require('react/addons');

console.log('Welcome to Vacay. Plan a trip!');

const MyClass = React.createClass({
  render() {
    return <div>A React class.</div>;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  React.render(React.createElement(MyClass), document.getElementById('container'));
});