import { Map as IMap } from 'immutable';
import React, { PropTypes } from 'react/addons';

import LoginActions from './actions/LoginActions';

import Input from 'components/formFields/Input';


/**
 * The login component.
 */
export default class Login extends React.Component {
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
    const { errorMessage, fieldErrors } = this.props;
    const { email, password } = this.state;
    const onChange = this.onChange.bind(this);

    return (
      <div>
        {errorMessage && <div>{errorMessage}</div>}
        <form role="form" onSubmit={this.login.bind(this)}>
          <Input
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
            error={fieldErrors ? fieldErrors.get('email') : null}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            error={fieldErrors ? fieldErrors.get('password') : null}
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  /**
   * The overall error message to show.
   */
  errorMessage: PropTypes.string,
  /**
   * The field errors for the login form.
   */
  fieldErrors: PropTypes.instanceOf(IMap)
};
