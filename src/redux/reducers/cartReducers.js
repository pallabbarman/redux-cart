/* eslint-disable no-case-declarations */
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartAction';

const initialState = {
    cart: [],
    products: [
        {
            id: 1,
            name: 'Lenovo Laptop',
        },
        {
            id: 2,
            name: 'Asus Laptop',
        },
        {
            id: 3,
            name: 'Dell Laptop',
        },
        {
            id: 4,
            name: 'HP Laptop',
        },
        {
            id: 5,
            name: 'Apple Laptop',
        },
    ],
};

const cardReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1,
            };
            const newCart = [...state.cart, newItem];
            return { ...state, cart: newCart };

        case REMOVE_FROM_CART:
            const { cartId } = action;
            const remainingCart = state.cart.filter((item) => item.cartId !== cartId);
            return {
                ...state,
                cart: remainingCart,
            };

        default:
            return state;
    }
};

export default cardReducers;
