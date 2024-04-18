import React, { useState, useMemo } from 'react';

function FactorialCalculator() {
  const [number, setNumber] = useState(0);

  // Calculate factorial using useMemo
  const calculateFactorial = (number) => {
    console.log('Calculating factorial...');
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }

  const factorial = calculateFactorial(number);

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <label>
        Enter a number:
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </label>
      <p>Factorial of {number} is: {factorial}</p>
    </div>
  );
}

export default FactorialCalculator;
