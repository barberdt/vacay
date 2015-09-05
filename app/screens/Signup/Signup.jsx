const React = require('react/addons');

const SignupActions = require('./actions/SignupActions');


/**
 * The signup component.
 */
const Signup = React.createClass({
  getInitialState() {
    return {
      username: null,
      password: null
    };
  },

  /**
   * Attempt to sign up.
   *
   * @param {Object} e - The event emitted by the form submit.
   */
  signup(e) {
    e.preventDefault();
    SignupActions.signup(this.state);
  },

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  },

  render() {
    const { username, password } = this.state;

    return (
      <form role="form" onSubmit={this.signup}>
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
        <button type="Submit">Sign Up</button>
      </form>
    );
  }
});

module.exports = Signup;
