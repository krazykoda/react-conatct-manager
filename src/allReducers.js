import reducer from "./store/reducer";
import {firebaseReducer} from "react-redux-firebase";
import { combineReducers } from "redux";


export default combineReducers({
    contactState: reducer,
    firebase: firebaseReducer
})