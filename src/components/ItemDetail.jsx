import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";



const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0);
    const [showCount, setShowCount] = useState(true);
    const history = useNavigate();

    const onAdd = (quantity) => {
        setCount(quantity);
        setShowCount(false);                
    };

    

    return(
        <div>
            <h1>{item.name}</h1>
            <img src={item.imageUrl} alt={item.name} />
            <p>{item.description}</p>
            <p>{item.price}</p>
            {showCount ? (
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            ): (
                <button  onClick={() => navigate('/cart')}>Finalizar la compra</button>
            )}
        </div>
    );
};

export default ItemDetail;