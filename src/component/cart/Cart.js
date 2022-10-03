import React, { useEffect, useState } from 'react';

const Cart = () => {
   const {carts, setCarts} = useState([]);

   useEffect(()=> {
      fetch('fakeAPI.json')
      .then(res=> res.json())
      .then(data => console.log(data))
   }, [])
   return (
      <div>
         
      </div>
   );
};

export default Cart;