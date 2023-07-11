import React from "react";
import './CategoryType.css'
import Itemcard from "./Itemcard";
import menuItems from "../Arrays/menuitems";


export default function CategoryType({category, handleClick}){
    const {name}=category;
    function createItemCard(item){
        return (name==item.category)&&(<Itemcard key={item.id} item={item} handleClick={handleClick} />)
    }

    return (
        <div>
            <h2 className="category-name" id={name}>{name}</h2>
            <svg width="831" height="4" viewBox="0 0 831 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2H829" stroke="black" strokeWidth="3.2447" strokeLinecap="round"/>
            </svg>
            <div className="item-container">
                {menuItems.map(createItemCard)}
            </div>
        </div>
    )
}