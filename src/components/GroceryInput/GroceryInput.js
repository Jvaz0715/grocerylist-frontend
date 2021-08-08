import React, { useContext } from 'react';
import { GroceryInputContext } from '../../context/context';

import'./GroceryInput.css';

function GroceryInput() {


    const {
        handleOnSubmit,
        groceryInput,
    } = useContext(GroceryInputContext);

    return (
        <div className="grocery-input-container">
            <input 
                type="text"
                placeholder="add grocery"
                onChange={groceryInput}
            />
            <button onClick={(e) => {handleOnSubmit()}}>Submit</button>
        </div>
    )
}

export default GroceryInput;
