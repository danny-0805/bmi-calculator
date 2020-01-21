import React from 'react';
import ButtonGroup from './buttonGroup';
import PropTypes from "prop-types"

const PInput = (props) => (
  <div className="flex flex-wrap px-4 py-3 border-b border-gray-400">
    <div className="w-4/12 sm:w-6/12 text-left">{props.caption}</div>
    <div className="w-8/12 sm:w-6/12 text-right flex flex-wrap justify-end">
      <input className="w-10 text-gray-500 bg-gray-200 rounded" type="text" placeholder="-" value={!!props.amount ? props.amount : ''} onChange={props.handleChange}/>
      <span className="mr-2 text-gray-500 w-6 text-left">{`${props.unit}`}</span>
      <ButtonGroup
        isZero={!props.amount}
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
  handleChange: PropTypes.func,
}

PInput.defaultProps = {
  caption: `Reset`,
}

export default PInput;