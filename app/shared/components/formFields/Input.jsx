import radium from 'radium';
import React, { PropTypes } from 'react';

import FormField from './FormField';
import style from './InputStyle';

const propTypes = {
  /**
   * The error message for the field.
   */
  error: PropTypes.string,
  /**
   * The name of the field.
   */
  name: PropTypes.string.isRequired,
  /**
   * The change callback.
   */
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  type: 'text',
};

/**
 * The form field for text inputs.
 */
function Input(props) {
  const { name, error } = props;
  const styles = [style.base];

  if (error) {
    styles.push(style.error);
  }

  return (
    <FormField name={name} error={error}>
      <input {...props} name={name} style={styles} />
    </FormField>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default radium(Input);
