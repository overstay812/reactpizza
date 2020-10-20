import React from "react";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";
import Categories from "../components/Categories";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPizzas } from "../redux/actions/pizzasActions";

const Home = ({ pizzasList, category, sortBy }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzasList &&
          pizzasList.map((item) => {
            return <PizzaBlock {...item} key={item.id} />;
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pizzasList: state.pizzasReducer.items,
    category: state.filtersReducer.category,
    sortBy: state.filtersReducer.sortBy,
  };
};

export default connect(mapStateToProps)(Home);
