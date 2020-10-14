import React from "react";
import SortPopup from "../../../components/SortPopup";
import Categories from "../../../components/Categories";
import PizzaBlock from "../../../components/PizzaBlock";

const Home = ({ items }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup popupList={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map(item => {
          return <PizzaBlock 
          {...item}
          key={item.id } />;
        })}
      </div>
    </div>
  );
};

export default Home;


