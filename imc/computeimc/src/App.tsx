import React, { useState } from 'react';

import './App.css';

function App() {
  const [height, setHeight] = useState<number>(48)
  const [weight, setWeight] = useState<number>(3)
  const [result, setResult] = useState<string>('')
  const [resultBMI, setResultBMI] = useState<string>('')
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  function handleHeight(event:React.ChangeEvent<HTMLInputElement>)  {
     const {value} =  event.currentTarget
     setHeight(Number(value))
     computeBMI()
     concludeBMI()
     
  }
  function handleWeight(event:React.ChangeEvent<HTMLInputElement>)  {
    const {value} =  event.currentTarget
    setWeight(Number(value))
    computeBMI()
    concludeBMI()
    
 }
  function computeBMI(){

    const BMI:string = (weight / ((height*height)/10000)).toFixed(2)
    setResult(BMI)
    
    
  } 
  function concludeBMI(){
    const numericResult = parseFloat(result);
    if ( numericResult <= 18.49){
      setResultBMI('Underweight ( ≤ 18.49 )')
    }else if( numericResult > 18.49 && numericResult<= 24.99){
      setResultBMI('Normal weight ( 18.50 - 24.99 )')
    }else if( numericResult>24.99 && numericResult <= 29.99){
      setResultBMI('Overweight ( 24.50 - 29.99 )')
    }else if( numericResult>29.99 && numericResult<= 34.99){
      setResultBMI('Obesity degree 1 ( 30.00 - 34.99 )')
    }else if( numericResult>34.99 && numericResult <= 39.99 ){
      setResultBMI('Obesity degree 2 ( 35.00 - 39.99 )')
    }else{
      setResultBMI('Morbid obesity ( ≥ 40.00) ')
    }
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='App'>
        <div  className='heightweight'>
          <label htmlFor = "height-id">Choose your height (cm) : {height} </label>
          <input type="range" 
                min = {48}
                max = {220} 
                step = {1} 
                value = {height}
                onChange = {handleHeight} 
                id = "height-id"
                className='slider'/>
          <label htmlFor = "weight-id">Choose your weight (kg) :  {weight} </label>
          <input type = "range"
                min = {3} 
                max = {200} 
                step = {1} 
                value = {weight}
                onChange = {handleWeight} 
                id = "weight-id"
                className='slider'/>
        </div>
        <p>Your BMI is <span className='resultBMI'>{result}</span> kg/m².</p>
        <p>Based on your BMI it turns out that you are : <span className='resultBMI'>{resultBMI}</span> </p>
        <button onClick={toggleMode}>Toggle mode</button>
      </div>
      

      
    </div>
  );
}

export default App;
