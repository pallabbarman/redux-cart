import { createStore } from 'redux';
import cardReducers from '../reducers/cartReducers';

const store = createStore(cardReducers);

export default store;
