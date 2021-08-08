import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import GroceryInput from "./components/GroceryInput/GroceryInput";
import { GroceryInputContext } from "./context/context";
import './App.css';

function App() {
  function handleOnSubmit() {
    console.log("add grocery button added")
  }

  function groceryInput(e) {
    console.log(e.target.value)
  }
  const groceryInputContext = {
    handleOnSubmit,
    groceryInput,
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
