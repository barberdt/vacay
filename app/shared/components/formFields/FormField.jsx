import { List } from 'immutable';
import React, { PropTypes } from 'react/addons';


/**
 * The base wrapper for form fields.
 */
export default class FormField extends React.Component {
  /**
   * Given the errors prop, construct a human-readable message.
   */
  generateErrorMessage() {
    const { errors, name } = this.props;
    let message = `${name} `;

    switch (errors.size) {
      case 1:
        message += `${errors.get(0)}.`;
        break;
      case 2:
        message += `${errors.get(0)} and ${errors.get(1)}.`;
      case 3:
        const numErrors = errors.size;
        message = errors.reduce((currMessage, error, i) => {
          if (i === numErrors - 1) {
            currMessage += ` and ${error}.`;
          } else {
            currMessage += ` ${error},`
          }

          return currMessage;
        }, message);
    }

    return message;
  }

  renderErrors() {
    const errorMessage = this.generateErrorMessage();
    return <div>{errorMessage}</div>;
  }

  render() {
    const { errors, children } = this.props;

    return (
      <div>
        {(errors && errors.size > 0) && this.renderErrors()}
        {children}
      </div>
    );
  }
}

FormField.propTypes = {
  /**
   * Renderable children.
   */
  children: PropTypes.node.isRequired,
  /**
   * The error strings for the field.
   */
  errors: PropTypes.instanceOf(List),
  /**
   * The name of the field.
   */
  name: PropTypes.string.isRequired
};
