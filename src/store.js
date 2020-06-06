import {createStore} from 'redux';
import reducers from './reducers';
import storeData from "./data.json"


export const store = createStore(reducers,storeData);
