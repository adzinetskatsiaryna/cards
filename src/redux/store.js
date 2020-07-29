import {applyMiddleware, combineReducers, createStore} from "redux";
import LoginReducer from "./loginRedux";
import RegistrationReducer from "./registrationRedux";
import SettingsReducer from "./settingsReducer";
import thunk from "redux-thunk";
import ForgorPasswordReducer from "./forgotReducer";



const reducer = combineReducers({
    login: LoginReducer,
    registration: RegistrationReducer,
    settings: SettingsReducer,
    forgot: ForgorPasswordReducer
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store