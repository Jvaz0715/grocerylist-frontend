import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import GroceryInput from "./components/GroceryInput/GroceryInput";
import { GroceryInputContext } from "./context/context";
import './App.css';

function App() {

  const [addedGrocery, setAddedGrocery] = useState('')

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(addedGrocery)
  }

  function handleGroceryInput(value) {
    setAddedGrocery(value);
    console.log(value);
  }

  const groceryInputContext = {
    addedGrocery,
    handleOnSubmit,
    handleGroceryInput,
  }

  return (
    <div className="App">
      <Header />
      <GroceryInputContext.Provider value={groceryInputContext}>
        <GroceryInput />
      </GroceryInputContext.Provider>
      
    </div>
  );
}

export default App;
