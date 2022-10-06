import React from 'react';
import './Cart-Item.css'
const CartItem = (props) => {
   const { img, name, time, age} = props.cart;
   const {addToListBtn} = props;

   return (
      <div className='cart-item'>
         <img src={img} alt="images" />

         <div className='cart-item-text'>
            <h2>{name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illum iste nisi atque tempore architecto, maxime reiciendis. Dolor, inventore quidem.</p>
            <p><strong>Age:</strong> {age} </p>
            <p><strong>Time required : </strong>{time}</p>
         </div>

         <div className='cart-item-btn'>
            <button onClick={() => addToListBtn(props)}>Add to list </button>
         </div>
      </div>
   );
};

export default CartItem;