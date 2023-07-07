import React from 'react'
import './WorkoutDetails.css'
import UpdateForm from './Updateform'
// const express = require('express');
// // const path = require('path');
// const app = express();
const WorkoutDetails=({workout})=>{
    const handleClick=async ()=>{
        const response=await fetch("canteen/food/"+workout.name,{
            method:"DELETE"
        })
        
        const json=await response.json();

        if(response.ok){
            console.log("ITEM WAS DELETED SUCCESSFULLY");
        }


    }
    return(
        <div className="workout-details">
            <h4><strong>ITEM NAME:</strong>{workout.name}</h4>
            <p><strong>PRICE:</strong>{workout.price}</p>
            <p><strong>CATEGORY:</strong>{workout.category}</p>
            {/* <p>{workout.createdAt}</p> */}
            <span onClick={handleClick} className="btn">DELETE</span>
            <a className="btn" href={"/services/"+workout._id}>UPDATE</a>
            <hr/>
        </div>
    )

    }
export default WorkoutDetails;