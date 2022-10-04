import React from 'react';
import logo from '../../images/founder.jpg';
import './Founder.css'
const Founder = () => {
   return (
      <div className='founder-container'>

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
               <p>10m</p>
            </div>
            <div>
               <p>20m</p>
            </div>
            <div>
               <p>30m</p>
            </div>
            <div>
               <p>40m</p>
            </div>
            <div>
               <p>50m</p>
            </div>
         </div>
         
         <h3>Sports details </h3>

         <div className='sports-details'>

            <div className='sport-time'>
               <h5>Sports time</h5>
               <p>0 seconds </p>
            </div>
            <br />
            <div className='sport-time'>
               <h5>Break time</h5>
               <p>0 seconds </p>
            </div>

         </div>

         <div className='activity-complete-btn'>
            <p>Activity completed</p>
         </div>
      </div>
   );
};

export default Founder;