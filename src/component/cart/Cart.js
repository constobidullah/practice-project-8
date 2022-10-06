import React, { useEffect, useState } from 'react';
import CartItem from '../Cart-Item/Cart-Item';
import Founder from '../founder/Founder';
import './Cart.css';


const Cart = () => {
   const [carts, setCarts] = useState([]);
   const [add, setAdd] = useState([]);
   // const [breakTime, setBreakTime] = useState([]);

   useEffect(() => {
      fetch('fakeAPI.json')
         .then(res => res.json())
         .then(data => setCarts(data))
   }, []);

   // useEffect(() => {
   //    fetch('fakeData.json')
   //    .then(load => load.json())
   //    .then(data => setBreakTime(data))
   // },[])

   const addToListBtn = (added) => {
      const newAdd = [...add, added];
      setAdd(newAdd);
   }


   return (
      <div className='cart-container'>
         <div className='item-container'>
            {
               carts.map(cart => <CartItem cart={cart} key={cart.id} addToListBtn={addToListBtn}></CartItem>)
            }
         </div>

         <div className='founder-compo'>
            <Founder cart={add}></Founder>
         </div>

      </div>
   );
};

export default Cart;