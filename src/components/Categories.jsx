import React, { useState } from "react";

const Categories = ({ items }) => {
const [activeItem, setActiveItem] = useState(null)

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null? 'active' : ''} onClick={()=>setActiveItem(null)}>Все</li>
        {   items.map((name, index) => (
          <li key={`${name}_${index} `} className={activeItem === index? 'active': ''} 
          onClick={()=>{
            setActiveItem(index)
            
            }}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
