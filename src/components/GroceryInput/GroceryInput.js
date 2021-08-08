import React, { useContext } from 'react';
import { GroceryInputContext } from '../../context/context';

import'./GroceryInput.css';

function GroceryInput() {


    const {
        addedGrocery,
        handleOnSubmit,
        handleGroceryInput,
    } = useContext(GroceryInputContext);

    return (
        <div className="grocery-input-container">
            <input 
                type="text"
                placeholder="add grocery"
                onChange={(e) => {handleGroceryInput(e.target.value)}}
            />
            <button onClick={handleOnSubmit}>Submit</button>
        </div>
    )
}

export default GroceryInput;
