import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user]=useAuthState(auth);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState('');
    const [error,setError]=useState('');
    // const navigate=useNavigate();

    const handleNameBlur=event=>{
        setName(event.target.value);
    }
    const handleAddressBlur=event=>{
        setAddress(event.target.value);
    }
     const handlePhoneBlur=event=>{
         setPhone(event.target.value);
     }

     const handleCreateUser=event=>{
        event.preventDefault();
        const Shipping={name,email,address,phone};
        console.log(Shipping);
       
    }

    return (
        <div className='from-container'>

        <div>
        <h2 className='form-title'>Shipping Information</h2>
         <form onSubmit={handleCreateUser}>
         <div className='input-group'>
              <label for="name">Your Name</label>
              <input onBlur={handleNameBlur} type="text" name="name"  id="" required/>
           </div>
         <div className='input-group'>
              <label for="email">Your Email</label>
              <input value={user?.email} readOnly type="text" name="email"  id="" required/>
           </div>
           <div className='input-group'>
               <label for="password">Address</label>
               <input onBlur={handleAddressBlur} type="text" name="address"  id="" required/>
           </div>
           <div className='input-group'>
               <label for="phone-number">Phone Number</label>
               <input onBlur={handlePhoneBlur} type="text" name="phone-number"  id="" required/>
           </div>
           <p style={{color:'red'}}>{error}</p>
           <input className='login-btn' type="submit" value="Add Shipping"/>
         </form>
        
        </div>
   
           </div>
    );
};

export default Shipment;