 import React, { useState } from 'react'; 
import Display from './components/Display';
import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';

function App() {
  const [calVal, setCalVal] = useState(''); 

  const onButtonClick = (buttonText) => {
    if (buttonText === 'c') {
      setCalVal(''); 
    } else if (buttonText === '=') {
      const result = eval(calVal)
      setCalVal(result)
      
    } else {
      const newDisplayValue = calVal + buttonText; 
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} /> 
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
