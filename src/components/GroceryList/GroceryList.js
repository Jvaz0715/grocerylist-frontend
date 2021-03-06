import React, { useContext } from 'react';
import { GroceryListContext } from '../../context/context';

import "./GroceryList.css"

function GroceryList() {

    // const [canEdit, setCanEdit] = useState(false);
    // const [editInput, setEditInput] = useState('');

    // function onHandleEditClick() {
    //     setCanEdit(!canEdit);
    // };

    // function handleEditOnChange(event) {
    //     setEditInput(event.target.value);
    // };

    // function onHandleEditSubmit(id) {
    //     onHandleEditClick();
    //     handleEditByID(id, editInput);
    // }

    const {
         groceryArray,
         canEdit,
         editInput,
        //  getAllGroceries,
         handleDeleteByID,
         handlePurchasedByID,
        //  handleEditByID,
         handleEditOnChange,
         onHandleEditSubmit,
         onHandleEditClick,
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
                            {canEdit ? (
                                <input
                                    type="text"
                                    onChange={handleEditOnChange}
                                    value={editInput}
                                    name="editInput"
                                    id={grocery._id}
                                />
                            ) : ( <div className="grocery-text-container">
                                <p className="grocery-text">{grocery.grocery}</p>
                            </div>)}



                            <div>
                                {canEdit ? (
                                    <button 
                                        className="submit-button"
                                        onClick={() => onHandleEditSubmit(grocery._id)}
                                    >
                                        Submit
                                    </button>
                                ):(
                                    <button 
                                        className="edit-button"
                                        onClick={onHandleEditClick}
                                    >
                                        Edit
                                    </button>
                                )}
                                
                                
                                <button 
                                    className="purchase-button"
                                    onClick={() => handlePurchasedByID(grocery._id, grocery.isPurchased)}
                                >
                                    Purchased
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
