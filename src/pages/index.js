import React, { useState } from "react"

import { Layout, Footer } from "../components/layout"
import SEO from "../components/seo"
import { ResetButton } from "../components/elements"
import PhysicalInput from "../components/physical"
import Result from "../components/result"

const IndexPage = () => {  
  const [unit, setUnit] = useState('us');
  const [weight, setWeight] = useState(150);
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(0);
  const [bmi, setBMI] = useState('');

  const handleReset = () => {
    setWeight(150);
    setHeightFt(5);
    setHeightIn(0);
    setBMI(0);
  }

  const handleChange = (type, realQuantity) => {
    const quantity = isNaN(realQuantity) ? 0 : realQuantity;

    if (type === 'unit') {      
      setUnit(quantity);
      getBMI(weight, heightFt, heightIn, quantity);
    } else if (isNaN(quantity)) {
      return;
    } else if (type === 'ft') {
      setHeightFt(quantity);
      getBMI(weight, quantity, heightIn, unit);
    } else if (type === 'in') {
      setHeightIn(quantity);
      getBMI(weight, heightFt, quantity, unit);
    } else if (type === 'weight') {
      setWeight(quantity);
      getBMI(quantity, heightFt, heightIn, unit);
    }
  }

  const getBMI = (currentWeight, currentFeet, currentInch, currentUnit) => {
    const height = currentFeet * 12 + currentInch;
    let BMI = 0;

    if (currentWeight && height) {
      BMI = 703 * weight / (height * height);
    }

    setBMI(BMI.toFixed(2));
  }

  return (
    <Layout>
      <SEO title="Home" />
      <PhysicalInput
        unit={unit}
        weight={weight}
        heightFt={heightFt}
        heightIn={heightIn}
        setUnit={(qt) => handleChange('unit', qt)}
        setWeight={(qt) => handleChange('weight', parseInt(qt, 10))}
        setHeightFt={(qt) => handleChange('ft', parseInt(qt, 10))}
        setHeightIn={(qt) => handleChange('in', parseInt(qt, 10))}
      />
      <Result bmi={bmi} />
      <ResetButton handleReset={handleReset} />
      <Footer />
    </Layout>
  );
}

export default IndexPage
