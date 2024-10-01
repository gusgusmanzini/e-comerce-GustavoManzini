

import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = ({onClose}) => {
    const { cart, removeItem, clearCart, totalItems, totalPrice } = useContext(CartContext);

    if (cart.length === 0) {
        return <h2>Tu carrito está vacío</h2>;
    }

    return (
          <div className="cart-container">
          <h2 className='cart-title'>Tu Carrito</h2>
          <button onClick={onClose}>Cerrar</button> {}
          <ul>
              {cart.map((item) => (
                  <li key={item.id}>
                      {item.name} - ${item.price} x {item.quantity}
                      <button onClick={() => removeItem(item.id)}>Remover</button>
                  </li>
              ))}
          </ul>
          <h3 className='totalitems'>Total Items: {totalItems}</h3>
          <h3 className='totalprice'>Total Price: ${totalPrice}</h3>
          <button onClick={clearCart}>Limpiar Carro</button>
      </div>
    );
};

// Componente separado para el item del carrito
const CartItem = ({ item, removeItem }) => (
    <li>
        {item.name} - ${item.price} x {item.quantity}
        <button onClick={() => removeItem(item.id)}>Remover</button>
    </li>
);

export default Cart;
