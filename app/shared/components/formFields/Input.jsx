import Radium from 'radium';
import React, { PropTypes } from 'react/addons';

import FormField from './FormField';

import style from './InputStyle';


/**
 * The form field for text inputs.
 */
class Input extends React.Component {
  render() {
    const { name, error, ...props } = this.props;
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
  onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
  type: 'text'
};

export default Radium(Input);
