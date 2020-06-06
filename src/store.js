import {createStore} from 'redux';
import reducers from './reducers/index';
import storeData from "./data.json"

let obj={};
obj.palindromes=storeData

export const store = createStore(reducers,obj);
