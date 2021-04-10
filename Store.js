import { createStore , combineReducers  } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension'
import shopReducer from "../Shopping/ShoppingReducer";


const rootReducer=combineReducers({
    shop:shopReducer
})

const store=createStore(rootReducer ,composeWithDevTools())

export default store