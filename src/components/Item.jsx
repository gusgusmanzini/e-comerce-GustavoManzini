import React from 'react';
import "../App";

const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <div className='item'>
      <h2 className='titulo'>{title}</h2>
      <img className="item-image"  src={pictureUrl} alt={title} />
      <p className='desc'>{description}</p>
      <p className='precio'>Precio: ${price}</p>
      <button className='btn'>Comprar</button>
    </div>
  );
};

export default Item;
