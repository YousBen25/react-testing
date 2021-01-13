import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello
        {this.props.name}
        , how are you?
      </div>
    );
  }
}

Hello.propTypes = {
  name: PropTypes.string.isRequired // like rails validations
};
export default Hello;
