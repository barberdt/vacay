import React from 'react/addons';

import LoginActions from './actions/LoginActions';


/**
 * The login component.
 */
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: null, password: null };
  }

  /**
   * Attempt to log in.
   *
   * @param {Object} e - The event emitted by the form submit.
   */
  login(e) {
    e.preventDefault();
    const { email, password } = this.state;
    LoginActions.login(email, password);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <form role="form" onSubmit={this.login.bind(this)}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.onChange.bind(this)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={this.onChange.bind(this)}
        />
        <button type="submit">Log In</button>
      </form>
    );
  }
}
