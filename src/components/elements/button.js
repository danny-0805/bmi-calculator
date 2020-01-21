import React from 'react';
import PropTypes from "prop-types"

const ResetButton = (props) => (
  <div className="mt-8 mb-2">
    <button className="w-full h-16 bg-blue-600 text-gray-400" onClick={props.handleReset}>{props.caption}</button>
  </div>
);

ResetButton.propTypes = {
  caption: PropTypes.string,
  handleReset: PropTypes.func,
}

ResetButton.defaultProps = {
  caption: `Reset`,
}

export default ResetButton;