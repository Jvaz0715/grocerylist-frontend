import React, { useState, useEffect } from 'react';
import axios from "axios";

import Header from './components/Header/Header';
import GroceryInput from "./components/GroceryInput/GroceryInput";
import GroceryList from "./components/GroceryList/GroceryList";
import { GroceryInputContext, GroceryListContext } from "./context/context";

import './App.css';

function App() {

  const [addedGrocery, setAddedGrocery] = useState('');
  const [groceryArray, setGroceryArray] = useState([]);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const URL = "http://localhost:3001";

  useEffect(() => {
    getAllGroceries();
    
  }, [])
  
  async function getAllGroceries() {
    let allGroceries = await axios.get(`${URL}/api/groceryList/get-all-groceries`);
    setGroceryArray(allGroceries.data.payload);
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    if(addedGrocery.length === 0) {
      setError(true);
      setErrorMessage("Cannot create an empty grocery item")
    } else {
      let groceryExists = groceryArray.findIndex((item) => 
        item.grocery.toLowerCase() === addedGrocery.toLowerCase()
      );

      if (groceryExists > -1) {
        setError(true);
        setErrorMessage("That grocery item is already listed");
      } else {
        try {
          let createdGrocery = await axios.post(`${URL}/api/groceryList/create-grocery`, {grocery: addedGrocery});
          let newGroceryArray = [...groceryArray, createdGrocery.data.payload];

          setGroceryArray(newGroceryArray);
          setAddedGrocery("");
        } catch(e) {
            console.log(e)
        }
      } 
    }
  };

  function handleGroceryInput(value) {
    setAddedGrocery(value);
  }

  const groceryInputContext = {
    addedGrocery,
    handleOnSubmit,
    handleGroceryInput,
  };

  const groceryListContext = {
    groceryArray,
    getAllGroceries,
  }
  return (
    <div className="App">
      <Header />

      <GroceryInputContext.Provider value={groceryInputContext}>
        <GroceryInput />
      </GroceryInputContext.Provider>

      <GroceryListContext.Provider value={groceryListContext}>
        <GroceryList />
      </GroceryListContext.Provider>
      
    </div>
  );
}

export default App;
