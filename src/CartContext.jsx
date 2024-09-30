
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    
    const addItem = (item, quantity) => {
        const existingItem = cart.find((product) => product.id === item.id);

        if (existingItem) {
            setCart(cart.map((product) => 
                product.id === item.id 
                    ? { ...product, quantity: product.quantity + quantity } 
                    : product
            ));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    
    const clearCart = () => {
        setCart([]);
    };

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;