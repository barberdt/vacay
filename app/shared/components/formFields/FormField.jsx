import React, { PropTypes } from 'react';

import style from './FormFieldStyle';

const propTypes = {
  /**
   * The error message for the field.
   */
  error: PropTypes.string,
  /**
   * The name of the field.
   */
  name: PropTypes.string.isRequired,
};

/**
 * The base wrapper for form fields.
 */
export default class FormField extends React.Component {
  renderError() {
    const { error } = this.props;
    return <div style={style.error}>{`${error}`}</div>;
  }

  render() {
    const { error, children } = this.props;

    return (
      <div>
        {error && this.renderError()}
        {children}
      </div>
    );
  }
}

FormField.propTypes = propTypes;
