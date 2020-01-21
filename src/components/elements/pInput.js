import React from 'react';
import ButtonGroup from './buttonGroup';
import PropTypes from "prop-types"

const PInput = (props) => (
  <div className="flex flex-wrap px-4 py-3 border-b border-gray-400">
    <div className="w-6/12 text-left">{props.caption}</div>
    <div className="w-6/12 text-right">
      <span className="mx-2 text-gray-500">{`${props.amount || '-'} ${props.unit}`}</span>
      <ButtonGroup
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
      />
    </div>
  </div>
);

PInput.propTypes = {
  caption: PropTypes.string,
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  unit: PropTypes.string,
  handleIncrease: PropTypes.func,
  handleDecrease: PropTypes.func,
}

PInput.defaultProps = {
  caption: `Reset`,
}

export default PInput;