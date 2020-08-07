import {applyMiddleware, combineReducers, createStore} from "redux";
import LoginReducer from "./loginRedux";
import RegistrationReducer from "./registrationRedux";
import thunk from "redux-thunk";
import ForgotReducer from "./forgotReducer";
import ProfileReducer from "./profileReducer";
import SetNewPasswordReducer from "./setNewPassReducer";
import PacksReducer from "./packsReducer";
import CardsReducer from "./cardsReducer";



const reducer = combineReducers({
    login: LoginReducer,
    registration: RegistrationReducer,
    forgot: ForgotReducer,
    profile: ProfileReducer,
    setNewPass: SetNewPasswordReducer,
    packs:PacksReducer,
    cards:CardsReducer
});


const store = createStore(reducer, applyMiddleware(thunk));
export default store;
window.store=store;