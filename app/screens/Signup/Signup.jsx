import { Map as iMap } from 'immutable';
import radium from 'radium';
import React, { PropTypes } from 'react';

import SignupActions from './actions/SignupActions';
import Input from 'components/formFields/Input';
import style from './SignupStyle';

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
 * The signup component.
 */
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      first: null,
      last: null,
      password: null,
    };
    this.signup = this.signup.bind(this);
  }

  /**
   * Set state with the changed field's new value.
   *
   * @param {Object} e - The event emitted by the changed field.
   */
  onChange(e) {
    const { name, value } = e.target;
    SignupActions.updateField({ name, value });
  }

  /**
   * Attempt to sign up.
   *
   * @param {Object} e - The event emitted by the form submit.
   */
  signup(e) {
    e.preventDefault();
    const { email, first, last, password } = this.props.fields.toObject();
    SignupActions.signup({
      email: email.get('value'),
      first: first.get('value'),
      last: last.get('value'),
      password: password.get('value'),
    });
  }

  render() {
    const { error, fields } = this.props;
    const { email, first, last, password } = fields.toObject();
    const onChange = this.onChange.bind(this);

    return (
      <div style={style.container}>
        <div style={style.formContainer}>
          {error && <div>{error}</div>}
          <form role="form" onSubmit={this.signup(this)}>
            <Input
              placeholder="Email"
              autoComplete="email"
              name="email"
              value={email.get('value')}
              onChange={onChange}
              error={email.get('error')}
            />
            <Input
              placeholder="First"
              autoComplete="given-name"
              name="first"
              value={first.get('value')}
              onChange={onChange}
              error={first.get('error')}
            />
            <Input
              placeholder="Last"
              autoComplete="family-name"
              name="last"
              value={last.get('value')}
              onChange={onChange}
              error={last.get('error')}
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
            <button style={style.button} type="Submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

Signup.propTypes = propTypes;

export default radium(Signup);
