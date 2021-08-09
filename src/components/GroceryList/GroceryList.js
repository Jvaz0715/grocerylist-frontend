import React, { useContext } from 'react';
import { GroceryListContext } from '../../context/context';

import "./GroceryList.css"

function GroceryList() {
    
    const {
        groceryArray,
        handleDeleteByID,
        handlePurchasedByID,
    } = useContext(GroceryListContext);
    
    return (
        <div className="grocerylist-container">
            <h3>Grocery List</h3>
            <ul>
                {groceryArray.map((grocery, index) => {
                    return (
                        <li 
                            key={index}
                            className={`li-style ${grocery.isPurchased && "li-style-isPurchased"}`}
                        >
                            
                            <div className="grocery-text-container">
                                <p className="grocery-text">{grocery.grocery}</p>
                            </div>


                            <div>
                                <button 
                                    className="purchase-button"
                                    onClick={() => handlePurchasedByID(grocery._id, grocery.isPurchased)}
                                >
                                    Purchased
                                </button>
                                
                                
                                <button 
                                    className="edit-button"
                                >
                                    Edit
                                </button>
                                
                                
                                <button
                                    className="delete-button" 
                                    onClick={() => handleDeleteByID(grocery._id)}
                                >
                                    Delete
                                </button>
                            </div>
                            

                        </li>
                    )   
                })}
            </ul>
        
            
        </div>
    )
}

export default GroceryList;
