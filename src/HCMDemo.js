import React, { Component ,useState} from 'react';
import PropTypes from 'prop-types';
const HCMDemo =()=>{
   const  [name, setName]=useState('Harish')
   return (
       
       <div>
           {name}
           <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
           </div>
   )

}
export default HCMDemo;