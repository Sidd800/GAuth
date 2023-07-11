import React from "react";
import CategoryType from "./CategoryType";
import CategoryCard from "./CategoryCard.js";
import categories from "../Arrays/categorytypes";
import "./FoodItems.css";

export default function FoodItems({handleClick}){
return (
    <>
        <h2 className="category-name">Categories</h2>
        <svg width="831" height="4" viewBox="0 0 831 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2H829" stroke="black" strokeWidth="3.2447" strokeLinecap="round"/>
        </svg>
        <div className="card-container">
            {categories.map((category)=> <CategoryCard key={category.id} category={category} />)}
        </div>
        {categories.map((category)=> <CategoryType key={category.id} category={category} handleClick={handleClick} />)}
            
    </>
);
}