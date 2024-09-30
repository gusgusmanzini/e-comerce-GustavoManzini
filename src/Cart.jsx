



import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cart, removeItem, clearCart, totalItems, totalPrice } = useContext(CartContext);

    if (cart.length === 0) {
        return <h2>Tu carrito esta vacio</h2>;
    }

    return (
        <div>
            <h2>Tu Carrito</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={() => removeItem(item.id)}>Remover</button>
                    </li>
                ))}
            </ul>
            <h3>Total Items: {totalItems}</h3>
            <h3>Total Price: ${totalPrice}</h3>
            <button onClick={clearCart}>Limpiar Carro</button>
        </div>
    );
};

export default Cart;