import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import './Cart.css'



export default function Cart({size, cart,setCart, handleChange}){
    const [price,setPrice]=useState(0);
    const handlePrice = ()=> {
        let ans=0;
        cart.map((cartItem)=>(ans+=cartItem.amount*cartItem.price))
        setPrice(ans);
    }
    useEffect(()=>{
        handlePrice();
    })

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }
return (
    <div className="cart">
        <div className="container-my-cart">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="mdi:cart">
                    <path id="Vector" d="M28.3334 30C26.4834 30 25.0001 31.4833 25.0001 33.3333C25.0001 34.2174 25.3513 35.0652 25.9764 35.6903C26.6015 36.3155 27.4494 36.6666 28.3334 36.6666C29.2175 36.6666 30.0653 36.3155 30.6904 35.6903C31.3156 35.0652 31.6667 34.2174 31.6667 33.3333C31.6667 32.4493 31.3156 31.6014 30.6904 30.9763C30.0653 30.3512 29.2175 30 28.3334 30ZM1.66675 3.33331V6.66665H5.00008L11.0001 19.3166L8.73341 23.4C8.48341 23.8666 8.33341 24.4166 8.33341 25C8.33341 25.884 8.6846 26.7319 9.30972 27.357C9.93485 27.9821 10.7827 28.3333 11.6667 28.3333H31.6667V25H12.3667C12.2562 25 12.1503 24.9561 12.0721 24.8779C11.994 24.7998 11.9501 24.6938 11.9501 24.5833C11.9501 24.5 11.9667 24.4333 12.0001 24.3833L13.5001 21.6666H25.9167C27.1667 21.6666 28.2667 20.9666 28.8334 19.95L34.8001 9.16665C34.9167 8.89998 35.0001 8.61665 35.0001 8.33331C35.0001 7.89128 34.8245 7.46736 34.5119 7.1548C34.1994 6.84224 33.7754 6.66665 33.3334 6.66665H8.68341L7.11675 3.33331M11.6667 30C9.81675 30 8.33341 31.4833 8.33341 33.3333C8.33341 34.2174 8.6846 35.0652 9.30972 35.6903C9.93485 36.3155 10.7827 36.6666 11.6667 36.6666C12.5508 36.6666 13.3986 36.3155 14.0238 35.6903C14.6489 35.0652 15.0001 34.2174 15.0001 33.3333C15.0001 32.4493 14.6489 31.6014 14.0238 30.9763C13.3986 30.3512 12.5508 30 11.6667 30Z" fill="black"/>
                </g>
            </svg>
            <p>My Cart</p>
        </div>
        <p>Items Selected <span>({size})</span></p>
        <div className="cart-item-container">
            {cart.map((cartItem)=><FoodCard key={cartItem.id} cartItem={cartItem} handleChange={handleChange} handleRemove={handleRemove}/>)}
        </div>
        <div className="order-button-container">
            <p>Total Price <br /><span>{price}</span>/-</p>
            <button className="order-button">ORDER</button>
        </div>
    </div>
);
}

