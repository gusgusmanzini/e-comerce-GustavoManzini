import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) {
            console.log('Incrementando count:', count + 1);
            setCount(count + 1);
        }
    };

    const handleSubtract = () => {
        if (count > 1) {
            console.log('Decrementando count:', count + 1);
            setCount(count - 1);
        }
    };

    const handleAddToCart = () => {
        onAdd(count);
    };

    return (
        <div>
            <button onClick={handleSubtract}>-</button>
            <span className='count'>{count}</span>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
