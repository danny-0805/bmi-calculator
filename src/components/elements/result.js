import React from 'react';
import PropTypes from "prop-types"

const ResultElement = (props) => (
  <div className="flex flex-wrap px-4 py-3 border-b border-t border-gray-400">
    <div className="w-6/12 text-left">{props.caption}</div>
    <div className="w-6/12 text-right">
      <span className="mx-2 text-gray-500">{`${props.amount || '-'}`}</span>
    </div>
  </div>
);

ResultElement.propTypes = {
  caption: PropTypes.string,
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

ResultElement.defaultProps = {
  caption: `BMI`,
}

export default ResultElement;