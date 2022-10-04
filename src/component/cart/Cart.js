import React, { useEffect, useState } from 'react';
import CartItem from '../Cart-Item/Cart-Item';
import Founder from '../founder/Founder';
import './Cart.css'
const Cart = () => {
   const [carts, setCarts] = useState([]);

   useEffect(() => {
      fetch('fakeAPI.json')
         .then(res => res.json())
         .then(data => setCarts(data))
   }, []);


   return (
      <div className='cart-container'>
         <div className='item-container'>
            {
               carts.map(cart => <CartItem cart={cart} key={cart.id}></CartItem>)
            }
         </div>

         <div>
            <Founder></Founder>
         </div>

      </div>
   );
};

export default Cart;