import React, { useContext } from 'react';
import { GroceryListContext } from '../../context/context';

import "./GroceryList.css"

function GroceryList() {
    const {
        groceryArray,
    } = useContext(GroceryListContext);
    console.log(groceryArray)
    return (
        <div className="grocerylist-container">
            <h3>Grocery List</h3>
            <ul>
                {groceryArray.map((grocery, index) => {
                    return (
                        <li key={index}>
                            <div className="grocery-text-container">
                                <p className="grocery-text">{grocery.grocery}</p>
                            </div>
                            <div>
                                <button className="purchase-button">Purchased</button>
                                <button className="edit-button">Edit</button>
                                <button className="delete-button">Delete</button>
                            </div>
                            

                        </li>
                    )   
                })}
            </ul>
        
            
        </div>
    )
}

export default GroceryList;
