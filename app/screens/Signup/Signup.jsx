import { Map as IMap } from 'immutable';
import React, { PropTypes } from 'react/addons';

import SignupActions from './actions/SignupActions';

import Input from 'components/formFields/Input';


/**
 * The signup component.
 */
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: null, first: null, last: null, password: null }
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
    const { email, first, last, password } = this.state;
    const onChange = this.onChange.bind(this);

    return (
      <div>
        {errorMessage && <div>{errorMessage}</div>}
        <form role="form" onSubmit={this.signup.bind(this)}>
          <Input
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
            error={fieldErrors ? fieldErrors.get('email') : null}
          />
          <Input
            placeholder="First"
            name="first"
            value={first}
            onChange={onChange}
            error={fieldErrors ? fieldErrors.get('first') : null}
          />
          <Input
            placeholder="Last"
            name="last"
            value={last}
            onChange={onChange}
            error={fieldErrors ? fieldErrors.get('last') : null}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            error={fieldErrors ? fieldErrors.get('password') : null}
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
  fieldErrors: PropTypes.instanceOf(IMap)
};

export default Signup;
