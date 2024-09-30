// import carrito from "../assets/carrito.png";

// export const CartWidget = () => (
//   <> 
//     <img className="carrito" src={carrito} height={30}/>
//     <span>7</span>
//   </>
// );
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const itemCount =5;

  return (
    <div style={{position: 'relative' }}>
      <FaShoppingCart className="carrito"s size={24} />
      {itemCount > 0 && (
        <span style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '5px 10px',
          fontSize: '12px'
        }}>
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartWidget;