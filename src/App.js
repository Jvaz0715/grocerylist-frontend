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
  const [canEdit, setCanEdit] = useState(false);
  const [editInput, setEditInput] = useState('');

  const URL = "http://localhost:3001";

  useEffect(() => {
    getAllGroceries();
  }, [])
  
  async function getAllGroceries() {
    let allGroceries = await axios.get(`${URL}/api/groceryList/get-all-groceries`);
    setGroceryArray(allGroceries.data.payload);
  };

  async function handleOnSubmit(e) {
    e.preventDefault();

    if(addedGrocery.length === 0) {
      setError(true);
      setErrorMessage("An empty grocery cannot be added");
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
          setError(false);
        } catch(e) {
          console.log(e)
        }
      } 
    }
  };

  async function handleEditByID(id, editInput) {
    try {
      let editedGrocery = await axios.put(`${URL}/api/groceryList/update-grocery-by-id/${id}`, {
        grocery: editInput
      });

      let updatedGroceryArray = groceryArray.map((item) => {
        if (item._id === id) {
          item.grocery = editedGrocery.data.payload.grocery;
        }
        return item;
      });

      setGroceryArray(updatedGroceryArray);

    } catch (e) {
      console.log(e);
    }
  };

  async function handleDeleteByID(id) {
    try {
      let deletedGrocery = await axios.delete(`${URL}/api/groceryList/delete-grocery-by-id/${id}`);

      let filteredArray = groceryArray.filter(
        (item) => item._id !== deletedGrocery.data.payload._id
      );
      setGroceryArray(filteredArray);
    } catch(e) {
      console.log(e);
    }
  };

  async function handlePurchasedByID(id, isPurchased) {
    try{
      let groceryIsPurchashedUpdated = await axios.put(`${URL}/api/groceryList/update-grocery-by-id/${id}`, { isPurchased: !isPurchased });

      let updatedGroceryArray = groceryArray.map((item) => {
        if (item._id === groceryIsPurchashedUpdated.data.payload._id) {
          item.isPurchased = groceryIsPurchashedUpdated.data.payload.isPurchased;
        }
        return item;
      });

      setGroceryArray(updatedGroceryArray);

    } catch(e) {
      console.log(e);
    }
  };

  async function sortByPurchased(isPurchased) {
    try {
      let isPurchasedGroceryArray = await axios.get(`${URL}/api/groceryList/get-groceries-by-purchased?isPurchased=${isPurchased}`);

      // setGroceryArray(isPurchasedGroceryArray)

    } catch (e) {
      console.log(e);
    }
  }

  async function sortByDate(sortOrder) {
    try {
      let sortedGroceries = await axios.get(
        `${URL}/api/groceryList/get-groceries-by-sort?sort=${sortOrder}`
      );
      
      console.log(sortedGroceries.data.payload)
      setGroceryArray(sortedGroceries.data.payload)

    } catch (e) {
      console.log(e);
    }
  }

  function handleGroceryInput(value) {
    setAddedGrocery(value);
  };

  function onHandleEditClick() {
     setCanEdit(!canEdit);
  };

  function handleEditOnChange(event) {
    setEditInput(event.target.value);
  };

  function onHandleEditSubmit(id) {
    onHandleEditClick();
    handleEditByID(id, editInput);
  };

  const groceryInputContext = {
    addedGrocery,
    error,
    errorMessage,
    handleOnSubmit,
    handleGroceryInput,
    sortByDate,
    sortByPurchased,
  };

  const groceryListContext = {
    groceryArray,
    canEdit,
    editInput,
    getAllGroceries,
    handleDeleteByID,
    handlePurchasedByID,
    handleEditByID,
    handleEditOnChange,
    onHandleEditSubmit,
    onHandleEditClick,
  };
  
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
