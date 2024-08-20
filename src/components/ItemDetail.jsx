import React, { createContext, useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";



 const CartContext = createContext();

 export const useCart = () => useContext(CartContext);

 export const CartProvider = ({ children }) => {
     const [purchaseCompleted, setPurchaseCompleted] = useState(false);

     return(
         <CartContext.Provider value={{ purchaseCompleted, setPurchaseCompleted }}>
             {children}
         </CartContext.Provider>
     )
 }

 const ItemDetail = ({ item }) => {
     const [count, setCount] = useState(0);
     const [showCount, setShowCount] = useState(true);
     const navigate = useNavigate();

     const onAdd = (quantity) => {
         setCount(quantity);
         setShowCount(false);                
     };

    

    return(
        <div>
            <h2>{item.name}</h2>
            <img src={item.imageUrl} alt={item.name} />
            <p>{item.description}</p>
            <p>{item.price}</p>
            {showCount ? (
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            ): (
                <button  onClick={() => navigate('/Cart')}>Finalizar la compra</button>
              
            )}
        </div>
    );
};

export default ItemDetail;