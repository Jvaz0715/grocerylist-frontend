import React, { useContext } from 'react';
import { GroceryInputContext } from '../../context/context';

import'./GroceryInput.css';

function GroceryInput() {
    const {
        addedGrocery,
        error,
        errorMessage,
        handleOnSubmit,
        handleGroceryInput,
        sortByDate,
        sortByPurchased,
    } = useContext(GroceryInputContext);

    return (
        <div className="grocery-input-body">
            <div className="grocery-input-container">
                <input 
                    type="text"
                    placeholder="add grocery"
                    value={addedGrocery}
                    onChange={(e) => {handleGroceryInput(e.target.value)}}
                />
                <button onClick={handleOnSubmit}>Submit</button>
            </div>
            <div>
                <p className="errorMessage-text">{error && errorMessage}</p>
            </div>
            

            <div className="sorting-div">
                <ul>
                    <li>
                        <button
                            onClick={() => sortByDate("asc")}
                        >
                            Sort by date added - Oldest to Newest
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => sortByDate("desc")}
                        >
                            Sort by date added - Newest to Oldest
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => sortByPurchased("true")}
                        >
                            Sort by purchased
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => sortByPurchased("false")}
                        >
                            Sort by not purchased
                        </button>
                    </li>

                </ul>
            </div>

        </div>
        
    )
}

export default GroceryInput;
