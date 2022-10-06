import React, { useEffect, useState } from 'react';
import logo from '../../images/founder.jpg';
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import './Founder.css';

const Founder = ({ cart }) => {

   const successToast = () => {
      toast("You are activity completed successfully" ,{
         className: "Custome-toast", 
         draggable: true,
         position: toast.POSITION.TOP_CENTER
      })
   }

   let total = 0;
   for (const add of cart) {
      total = total + isNaN(add.time);
   }

   // toast.success();

   return (
      <div className='founder-container'>

         <ToastContainer draggable={false} transition={Zoom} autoClose={15000}/>


         <div className='founder-main'>

            <div>
               <img src={logo} alt="" />
            </div>

            <div className='founder-text'>
               <h3>Sara islam </h3>
               <p>Katan, India </p>
            </div>

         </div>

         <div className='founder-body-details'>

            <div>
               <p>Weight</p>
               <h4>75 <span>KG</span></h4>
            </div>

            <div>
               <p>Height</p>
               <h4>6'3 <span>inc</span></h4>
            </div>

            <div>
               <p>Age</p>
               <h4>23 <span>year</span></h4>
            </div>

         </div>
         <h3>Add a break</h3>

         <div className='add-break'>

            <div>
               <p>10</p>
            </div>
            <div>
               <p >20</p>
            </div>
            <div>
               <p >30</p>
            </div>
            <div>
               <p >40</p>
            </div>
            <div>
               <p>50</p>
            </div>

         </div>

         <h3>Sports details </h3>

         <div className='sports-details'>

            <div className='sport-time'>
               <h5>Sports time</h5>
               <p>{total} </p>
            </div>

            <br />

            <div className='sport-time'>
               <h5>Break time</h5>
               <p> minute </p>
            </div>

         </div>

         <div className='activity-complete-btn'>
            <button onClick={successToast}>Activity completed</button>
         </div>
      </div>
   );
};

export default Founder;