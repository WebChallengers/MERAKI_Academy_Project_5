import { createStore, combineReducers } from "redux";
import products from "./products/index";
import orders from "./orders";
import loginReducer from "./login/index";
const reducers = combineReducers({ products, loginReducer, orders });

const store = createStore(reducers);

export default store;
