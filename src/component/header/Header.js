import React from 'react';
import './Header.css';
import logo from '../../images/headerIcon.jpg'
const Header = () => {
   return (
      <div>
         <div className='header-component'>
            <img src={logo} alt="" />
            <div>
               <h1>Sports-Club</h1>
            </div>
         </div>
         <div className='header-under-text'>
            <h4>Select today your sports </h4>
         </div>
      </div>
   );
};

export default Header;