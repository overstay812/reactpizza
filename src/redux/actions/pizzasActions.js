import Axios from "axios"

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    Axios.get(category === null ? `http://localhost:3001/pizzas?_sort=${sortBy}&_order=asc` : `http://localhost:3001/pizzas?category=${category}&_sort=${sortBy}&_order=asc`)
        .then(response => dispatch(setPizzas(response.data)))
        .catch(e => console.log(e))
}



export const setPizzas = items => {
    return {
        type: 'SET_PIZZAS',
        payload: {
            items
        }

    }
} 