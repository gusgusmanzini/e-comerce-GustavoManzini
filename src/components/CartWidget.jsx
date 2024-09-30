
// import React, {useContext} from "react";
// import {CartContext} from '../CartContext';
// import { FaShoppingCart } from "react-icons/fa";

// const CartWidget = () => {
//   const {totalItems} = useContext(CartContext);

//   return (
//     <div style={{position: 'relative' }}>
//       <FaShoppingCart className="carrito"s size={24} />
//       {itemCount > 0 && (
//         <span style={{
//           position: 'absolute',
//           top: '-10px',
//           right: '-10px',
//           backgroundColor: 'red',
//           color: 'white',
//           borderRadius: '50%',
//           padding: '5px 10px',
//           fontSize: '12px'
//         }}>
//           {itemCount}
//         </span>
//       )}
//     </div>
//   );
// };

// export default CartWidget;

import React, { useContext } from 'react';
import { CartContext } from '../CartContext'; 

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);

    return (
        <div className="cart-widget">
            <i className="fa fa-shopping-cart"></i>
            <span>{totalItems}</span>
        </div>
    );
};

export default CartWidget;