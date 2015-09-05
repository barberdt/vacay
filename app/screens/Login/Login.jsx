const React = require('react/addons');

const LoginActions = require('./actions/LoginActions');


/**
 * The login component.
 */
const Login = React.createClass({
  getInitialState() {
    return {
      username: null,
      password: null
    };
  },

  /**
   * Attempt to log in.
   *
   * @param {Object} e - The event emitted by the form submit.
   */
  login(e) {
    e.preventDefault();
    const { username, password } = this.state;
    LoginActions.login(username, password);
  },

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  },

  render() {
    const { username, password } = this.state;

    return (
      <form role="form" onSubmit={this.login}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={this.onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={this.onChange}
        />
        <button type="submit">Log In</button>
      </form>
    );
  }
});

module.exports = Login;
