import React, { useContext } from 'react';
import { GroceryListContext } from '../../context/context';

function GroceryList() {
    const {
        groceryArray,
    } = useContext(GroceryListContext);
    return (
        <div>
            Hello!
        </div>
    )
}

export default GroceryList;
