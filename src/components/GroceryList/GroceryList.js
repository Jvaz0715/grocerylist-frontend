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
                            <span className="grocery-text">{grocery.grocery}</span>
                            <button>Purchased</button>
                            <button>Edit</button>
                            <button>Delete</button>

                        </li>
                    )   
                })}
            </ul>
        
            
        </div>
    )
}

export default GroceryList;
