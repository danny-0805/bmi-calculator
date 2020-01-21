import React, { useState } from "react"

import { Layout, Footer } from "../components/layout"
import SEO from "../components/seo"
import { ResetButton } from "../components/elements"
import PhysicalInput from "../components/physical"
import Result from "../components/result"

const IndexPage = () => {  
  const [unit, setUnit] = useState('us');
  const [weight, setWeight] = useState(0);
  const [heightFt, setHeightFt] = useState(0);
  const [heightIn, setHeightIn] = useState(0);
  const [bmi, setBMI] = useState('');

  const handleReset = () => {
    setWeight(0);
    setHeightFt(0);
    setHeightIn(0);
    setBMI(0);
  }

  const handleChange = (type, quantity) => {
    if (type === 'weight') {
      setWeight(quantity);
      getBMI(quantity, heightFt, heightIn, unit);
    } else if (type === 'ft') {
      setHeightFt(quantity);
      getBMI(weight, quantity, heightIn, unit);
    } else if (type === 'in') {
      setHeightIn(quantity);
      getBMI(weight, heightFt, quantity, unit);
    } else if (type === 'unit') {
      setUnit(quantity);
      getBMI(weight, heightFt, heightIn, quantity);
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
        setWeight={(qt) => handleChange('weight', qt)}
        setHeightFt={(qt) => handleChange('ft', qt)}
        setHeightIn={(qt) => handleChange('in', qt)}
      />
      <Result bmi={bmi} />
      <ResetButton handleReset={handleReset} />
      <Footer />
    </Layout>
  );
}

export default IndexPage
