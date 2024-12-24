// src/App.js
import React, { useState } from 'react';
//import { API } from 'aws-amplify';
//import { createCalcSys } from './graphql/mutations';
import './App.css';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operator, setOperator] = useState('-');
  const [result, setResult] = useState(0);

  const calculate = async () => {
    let calculatedResult = 0;
    switch (operator) {
      case '+':
        calculatedResult = Number(number1) + Number(number2);
        break;
      case '-':
        calculatedResult = Number(number1) - Number(number2);
        break;
      case '*':
        calculatedResult = Number(number1) * Number(number2);
        break;
      case '/':
        calculatedResult = number2 !== 0 ? Number(number1) / Number(number2) : 0;
        break;
      default:
        break;
    }
    setResult(calculatedResult);


  };

  return (
    <div className="calculator">
      <h1>計算アプリ</h1>
      <div className="calculator-input">
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="-">-</option>
          <option value="+">+</option>
          <option value="*">×</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
        <button onClick={calculate}>=</button>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default App;