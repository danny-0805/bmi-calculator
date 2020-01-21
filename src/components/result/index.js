import React from 'react';
import { ResultElement } from '../elements';

const Result = ({ bmi }) => (
  <div className="mb-4">
    <h1>Results</h1>
    <ResultElement caption="BMI" amount={bmi || '-'} />
  </div>
);

export default Result;