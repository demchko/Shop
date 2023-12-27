import {createStore} from "redux";

const initialState = {
    basket: [],
    total: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_ITEM':
            const updatedBasket = [...state.basket, action.payload];
            const updatedTotal = state.total + (action.payload.price * action.payload.quantity); // Припустимо, що в `action.payload` є поле `price`.

            return {
                ...state,
                basket: updatedBasket,
                total: updatedTotal
            };
        case 'CLEAR':
            return {
                ...state,
                basket: [],
                total: 0
            }
        case 'INCREMENT_QUANTITY':
            const itemToIncrement = state.basket.find(item => item.id === action.payload.id);

            if (itemToIncrement) {
                // If the item is found, create a new array with the updated item
                const updatedBasketIncrement = state.basket.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );

                return {
                    ...state,
                    basket: updatedBasketIncrement,
                    total: state.total + itemToIncrement.price
                };
            } else {
                // If the item is not found, return the current state
                return state;
            }
        case 'DECREMENT_QUANTITY':
            const itemToDecrement = state.basket.find(item => item.id === action.payload.id);

            if (itemToDecrement) {
                // If the item is found, create a new array with the updated item
                const updatedBasketIncrement = state.basket.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );

                const finishArr = updatedBasketIncrement.filter(item => item.quantity !== 0);

                return {
                    ...state,
                    basket: finishArr,
                    total: state.total - itemToDecrement.price
                };
            } else {
                // If the item is not found, return the current state
                return state;
            }
        default:
            return state
    }
}

const store = createStore(reducer);

export default store;