import {createStore} from 'redux';
import reducers from './reducers/index';
import storeData from "./data.json"

export const store = createStore(reducers,{palindromes: storeData});
