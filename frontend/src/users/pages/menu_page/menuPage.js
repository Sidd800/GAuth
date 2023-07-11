// import {useEffect,useState} from "react";
import {useEffect} from "react";
import WorkoutDetails from "../../components/WorkoutDetails";
import Navbar3 from "../../components/Navbar3";
// import ItemForm from "../components/Itemform"
import ItemForm from "../../components/Itemform";

// const MenuPage=()=>{

//     const [menuitems,setMenuItems]=useState(null);
//     useEffect(()=>{
//         const fetchWorkouts=async()=>{
//         const response=await fetch('/canteen/food',{
//             method:"GET"
//         })
//         const json=await response.json();
//         if(response.ok){
//             setMenuItems(json);
//         }
//         }
//         fetchWorkouts();
//     },[])
//     return(
//         <>
//         <Navbar3 />
//         <div className="home">
//             <div className="workouts">
//                 {menuitems && menuitems.map((workout)=>(
//                   <WorkoutDetails key={workout._id} workout={workout}/>
//                 )

//                 )}
//             </div>
//             {/* <ItemForm /> */}
//         </div>
//         </>
//     )
// }
// export default MenuPage;




import React, {useState} from "react";
import './menuPage.css'


// import Cart from "../components/Cart";
import Cart from "../../components/Cart";
// import FoodItems from "../components/FoodItems";
import FoodItems from "../../components/FoodItems";
// import Navbar3 from '../../components/Navbar3'


export default function MenuPage(){
    const [cart, setCart]=useState([]);
    
    const handleClick= (item)=>{
        let isPresent=false;
        cart.forEach((product)=>{
            if(item.id===product.id){
                isPresent =true;
            }
        })
        if(isPresent){
            return;
        }
        else {  
            setCart([...cart,item]);
        }
    }

    const handleChange =(item, d)=>{
        let ind = -1;
		cart.forEach((data, index)=>{
        
            
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
    }

    return (
        <>
            <Navbar3/>
        <div className="box">
            <div className="first-column">
               <FoodItems handleClick={handleClick}/>
            </div>
            <div className="second-column">
            </div>
            <div className="third-column">
                <Cart size={cart.length} cart={cart} setCart={setCart} handleChange={handleChange}/>
            </div>
        </div>
        </>
    );
}