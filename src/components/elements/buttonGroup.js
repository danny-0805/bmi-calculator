// eslint-disable jsx-a11y/click-events-have-key-events
import React from 'react';
import PropTypes from "prop-types"

const ButtonGroup = (props) => (
  <div className="inline-flex rounded border-2 border-blue-600 mx-1 text-lg font-black">
    <button className="border-r-2 border-blue-600 w-10 text-gray-600 h-6" onClick={props.handleDecrease}>-</button>
    <button className="w-10 text-blue-600 h-6" onClick={props.handleIncrease}>+</button>
  </div>
);

ButtonGroup.propTypes = {
  handleDecrease: PropTypes.func,
  handleIncrease: PropTypes.func,
}

export default ButtonGroup;