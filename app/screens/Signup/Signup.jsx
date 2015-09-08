import React from 'react/addons';

import SignupActions from './actions/SignupActions';


/**
 * The signup component.
 */
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: null, password: null }
  }

  /**
   * Attempt to sign up.
   *
   * @param {Object} e - The event emitted by the form submit.
   */
  signup(e) {
    e.preventDefault();
    SignupActions.signup(this.state);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { username, password } = this.state;

    return (
      <form role="form" onSubmit={this.signup.bind(this)}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={this.onChange.bind(this)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={this.onChange.bind(this)}
        />
        <button type="Submit">Sign Up</button>
      </form>
    );
  }
}
