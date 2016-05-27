import { Map as iMap } from 'immutable';
import radium from 'radium';
import React, { PropTypes } from 'react';

import LoginActions from './actions/LoginActions';
import Input from 'components/formFields/Input';
import style from './LoginStyle';

const propTypes = {
  /**
   * The overall error for the form.
   */
  error: PropTypes.string,
  /**
   * The field data, including each field's value and potential error.
   */
  fields: PropTypes.instanceOf(iMap),
};

/**
 * The login component.
 */
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: null, password: null };
    this.login = this.login.bind(this);
  }

  /**
   * Handler for changes to the form fields.
   *
   * @param {Event} e - The event emitted by the change.
   */
  onChange(e) {
    const { name, value } = e.target;
    LoginActions.updateField({ name, value });
  }

  /**
   * Attempt to log in.
   *
   * @param {Object} e - The event emitted by the form submit.
   */
  login(e) {
    e.preventDefault();
    const { email, password } = this.props.fields.toObject();
    LoginActions.login(email.get('value'), password.get('value'));
  }

  render() {
    const { error, fields } = this.props;
    const { email, password } = fields.toObject();
    const onChange = this.onChange.bind(this);

    return (
      <div style={style.container}>
        <div style={style.formContainer}>
          {error && <div>{error}</div>}
          <form role="form" onSubmit={this.login(this)}>
            <Input
              placeholder="Email"
              autoComplete="email"
              name="email"
              value={email.get('value')}
              onChange={onChange}
              error={email.get('error')}
            />
            <Input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              name="password"
              value={password.get('value')}
              onChange={onChange}
              error={password.get('error')}
            />
            <button style={style.button} type="submit">Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = propTypes;

export default radium(Login);
