import React, { createContext, useState, useContext, Children } from 'react';

const CartContext = createContext();



export const CartProvider = ({ Children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem =>
                cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + quantity}
                : cartItem
            ));
        } else {

            setCart([...cart, { ...item, quantity}]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            {Children}
        </CartContext.Provider>
    );
};