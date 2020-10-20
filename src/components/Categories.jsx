import React, { useState } from "react";
import { connect } from "react-redux";
import { setCategory } from "../redux/actions/filtersActions";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories = ({ setCategory }) => {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => {
            setActiveItem(null);
            setCategory(null);
          }}
        >
          Все
        </li>
        {categoryNames.map((name, index) => (
          <li
            key={`${name}_${index} `}
            className={activeItem === index ? "active" : ""}
            onClick={() => {
              setActiveItem(index);
              setCategory(index);
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapDispatchToPtops = {
  setCategory,
};

export default connect(null, mapDispatchToPtops)(Categories);
