import React from 'react';
import { PInput, UnitSelect } from '../elements';

const PhysicalInput = (props) => {
  const { unit, weight, heightFt, heightIn } = props;

  return (
    <div className="mt-4 mb-12">
      <UnitSelect caption="Units" unit={unit} changeUnit={e => props.setUnit(e.target.value)}/>
      <PInput
        caption="Weight"
        unit="lbs"
        amount={weight}
        handleIncrease={() => props.setWeight(weight + 1)}
        handleDecrease={() => props.setWeight(weight >= 1 ? weight - 1 : 0)}
      />
      <PInput
        caption="Height"
        unit="ft"
        amount={heightFt}
        handleIncrease={() => props.setHeightFt(heightFt + 1)}
        handleDecrease={() => props.setHeightFt(heightFt >= 1 ? heightFt - 1 : 0)}
      />
      <PInput
        caption=""
        unit="in"
        amount={heightIn}
        handleIncrease={() => props.setHeightIn(heightIn < 11 ? heightIn + 1 : 0)}
        handleDecrease={() => props.setHeightIn(heightIn >= 1 ? heightIn - 1 : 0)}
      />
    </div>
  );
}

export default PhysicalInput;