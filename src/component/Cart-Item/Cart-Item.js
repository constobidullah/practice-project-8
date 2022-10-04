import React from 'react';
import './Cart-Item.css'
const CartItem = (props) => {
   const { img, name, time } = props.cart;
   return (
      <div className='cart-item'>
         <img src={img} alt="images" />

         <div className='cart-item-text'>
            <h2>{name}</h2>
            <p>{time}</p>
         </div>

         <div className='cart-item-btn'>
            <button>Add to list </button>
         </div>
      </div>
   );
};

export default CartItem;