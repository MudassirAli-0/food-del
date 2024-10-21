import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";

import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from 'react-router-dom'


function PlaceOrder() {
  const { getCartTotalAmount, token,food_list, cartItems, url } = useContext(StoreContext);
  
  const [data, setData ]= useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })


  const onChangeHandler = (e)=>{
    const {name, value} = e.target;
    setData({...data, [name]: value})
  }


  const placeOrder = async(e)=>{
    e.preventDefault();
    
    let orderItem = [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo =  item
        itemInfo['quantity'] = cartItems[item._id];
        orderItem.push(itemInfo)
      }
    })
    console.log(orderItem);
    

    const orderData = {
      address: data,
      items: orderItem,
      amount: getCartTotalAmount()+2,
    }

    let response = await axios.post(url+"/api/order/place", orderData, {headers: {token}});
    console.log(response);
    
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url)
    }
    else{
      alert("Error")
    }
  
  }

  const navigate = useNavigate()

  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getCartTotalAmount()===0){
      navigate('/cart')
    }
  },[token])


  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required onChange={onChangeHandler} name="firstName" value={data.firstName} type="text" placeholder="First name" />
          <input required onChange={onChangeHandler} name="lastName" value={data.lastName} type="text" placeholder="Last name" />
        </div>
        <input required onChange={onChangeHandler} name="email" value={data.email} type="text" placeholder="Email address" />
        <input required onChange={onChangeHandler} name="street" value={data.street} type="text" placeholder="Street" />
        <div className="multi-fields">
          <input required onChange={onChangeHandler} name="city" value={data.city} type="text" placeholder="City" />
          <input required onChange={onChangeHandler} name="state" value={data.state} type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input required onChange={onChangeHandler} name="zipcode" value={data.zipcode} type="text" placeholder="Zip Code " />
          <input required onChange={onChangeHandler} name="country" value={data.country} type="text" placeholder="Country" />
        </div>
        <input required onChange={onChangeHandler} name="phone" value={data.phone} type="text" placeholder="phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getCartTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getCartTotalAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getCartTotalAmount() === 0 ? 0 :getCartTotalAmount() +2}</b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
