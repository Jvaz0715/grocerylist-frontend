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
            
        </div>
        
    )
}

export default GroceryInput;
