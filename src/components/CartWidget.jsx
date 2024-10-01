
import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import Cart from '../Cart'; 

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);
    const [isCartVisible, setCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setCartVisible(!isCartVisible);
    };

    return (
        <div>
        <button onClick={toggleCartVisibility}>
            🛒 ({totalItems})
        </button>
        {isCartVisible && (
            <div className="modal">
                <Cart onClose={toggleCartVisibility} />
                <button onClick={toggleCartVisibility}>Cerrar</button>
            </div>
        )}
    </div>
);
};

export default CartWidget;
