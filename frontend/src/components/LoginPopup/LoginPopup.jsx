import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios'

function LoginPopup({ setShowLogin }) {
  
  const {url, setToken} = useContext(StoreContext);
  
  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const onChangedHandler = (e)=>{
    const {name, value} = e.target;
    setData({...data, [name]: value});
  }

  const onLogin = async(e)=>{
    e.preventDefault()
    let newUrl = url;
    if(currentState === 'Login'){
      newUrl += '/api/user/login'
    }
    else{
      newUrl += '/api/user/register'
    }

    const respo  = await axios.post(newUrl, data)

    if(respo.data.success){
      setToken(respo.data.token)
      localStorage.setItem('token', respo.data.token)
      setShowLogin(false)
    }
    else{
      alert(respo.data.message)
    }

  }


  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input onChange={onChangedHandler} name="name" value={data.name} type="text" placeholder="Your name" required />
          )}

          <input onChange={onChangedHandler} name="email" value={data.email} type="text" placeholder="Your email" required />
          <input onChange={onChangedHandler} name="password" value={data.password} type="password" placeholder="Password" required />
        </div>
        <button type="submit">
          {currentState === "Sign up" ? "Create Accoutn" : "Login"}
        </button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the term of use & privacy policy.</p>
        </div>
        {currentState === "Login" ?
        <p>Create a new account? <span onClick={()=> setCurrentState('Sign up')}>Click here</span></p>
        : 
        <p>Already have an account? <span onClick={()=> setCurrentState('Login')}>Login here</span></p> }
        
        
      </form>
    </div>
  );
}

export default LoginPopup;
