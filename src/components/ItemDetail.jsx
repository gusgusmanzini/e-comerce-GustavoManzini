
import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext'; 

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addItem(item, quantity);
    };

    const finalizarCompra = () => {
        alert("gracias por tu compra!")
    }

    return (
        <div className="item-detail">
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <div>
                <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
            <button onClick={finalizarCompra}>Finalizar Compra</button>
            
        </div>
    );
};

export default ItemDetail;