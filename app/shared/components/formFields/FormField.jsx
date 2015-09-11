import React, { PropTypes } from 'react/addons';


/**
 * The base wrapper for form fields.
 */
export default class FormField extends React.Component {
  renderError() {
    const { error, name } = this.props;
    return <div>{`${name} ${error}.`}</div>;
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

FormField.propTypes = {
  /**
   * Renderable children.
   */
  children: PropTypes.node.isRequired,
  /**
   * The error message for the field.
   */
  error: PropTypes.string,
  /**
   * The name of the field.
   */
  name: PropTypes.string.isRequired
};
