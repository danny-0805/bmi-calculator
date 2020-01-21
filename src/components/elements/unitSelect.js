import React from 'react';
import PropTypes from "prop-types"

const UnitSelect = (props) => (
  <div className="flex flex-wrap px-4 py-3 border-b border-gray-400">
    <div className="w-6/12 text-left">{props.caption}</div>
    <div className="w-6/12 text-right flex justify-end">
      <select className="block w-32" value={props.unit} onBlur={props.changeUnit}>
        <option value="us">US customary</option>
        {/* <option value="si">International System</option> */}
      </select>
    </div>
  </div>
);

UnitSelect.propTypes = {
  caption: PropTypes.string,
  changeUnit: PropTypes.func,
}

export default UnitSelect;