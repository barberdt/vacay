import React, { PropTypes } from 'react/addons';

import FormField from './FormField';


/**
 * The form field for text inputs.
 */
export default class Input extends React.Component {
  render() {
    const { name, error, type, placeholder, value, onChange } = this.props;

    return (
      <FormField name={name} error={error}>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </FormField>
    );
  }
}

Input.propTypes = {
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
  onChange: PropTypes.func,
  /**
   * The placeholder text.
   */
  placeholder: PropTypes.string,
  /**
   * The type attribute for the input.
   */
  type: PropTypes.oneOf(['text', 'password']),
  /**
   * The value for the input.
   */
  value: PropTypes.string
};

Input.defaultProps = {
  type: 'text'
};
