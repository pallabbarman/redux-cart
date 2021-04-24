export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FORM_CART';

export const addToCart = (id, name) => ({ type: ADD_TO_CART, id, name });

export const removeFromCart = (cartId) => ({ type: REMOVE_FROM_CART, cartId });
