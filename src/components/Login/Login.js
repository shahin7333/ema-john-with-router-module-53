import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate=useNavigate();

    const location=useLocation();
    const from=location.state?.from.pathname ||'/home';
    
    const handleEmailBlur=event=>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur=event=>{
        setPassword(event.target.value);
    }
    if (user){
        navigate(from,{replace: true});
    }

    const handleUserSignIn=event=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }

    return (
        <div className='from-container'>

     <div>
     <h2 className='form-title'>Login</h2>
      <form onSubmit={handleUserSignIn}>
      <div className='input-group'>
           <label for="email">Email</label>
           <input onBlur={handleEmailBlur} type="email" name="email"  id="" required/>
        </div>
        <div className='input-group'>
            <label for="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password"  id="" required/>
        </div>
        <p style={{color:'red'}}>{error?.message}</p>
        {
            loading && <p>loading...</p>
        }
        <input className='login-btn' type="submit" value="login" />
      </form>
      <p>
          New to Ema-john? <Link className='form-link' to='/signup'>Create an account</Link>
      </p>
     </div>

        </div>
    );
};
export default Login;