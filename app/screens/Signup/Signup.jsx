import { Map as ImmutableMap } from 'immutable';
import React, { PropTypes } from 'react/addons';

import SignupActions from './actions/SignupActions';

import Input from 'components/formFields/Input';


/**
 * The signup component.
 */
export default class Signup extends React.Component {
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

  /**
   * Set state with the changed field's new value.
   *
   * @param {Object} e - The event emitted by the changed field.
   */
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errorMessage, fieldErrors } = this.props;
    const { username, password } = this.state;

    return (
      <div>
        {errorMessage && <div>{errorMessage}</div>}
        <form role="form" onSubmit={this.signup.bind(this)}>
          <Input
            placeholder="Username"
            name="username"
            value={username}
            onChange={this.onChange.bind(this)}
            errors={fieldErrors ? fieldErrors.get('username') : null}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.onChange.bind(this)}
            errors={fieldErrors ? fieldErrors.get('password') : null}
          />
          <button type="Submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

Signup.propTypes = {
  /**
   * The overall error message to show.
   */
  errorMessage: PropTypes.string,
  /**
   * The field errors for the signup form.
   */
  fieldErrors: PropTypes.instanceOf(ImmutableMap)
};
