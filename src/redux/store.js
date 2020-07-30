import {applyMiddleware, combineReducers, createStore} from "redux";
import LoginReducer from "./loginRedux";
import RegistrationReducer from "./registrationRedux";
import thunk from "redux-thunk";
import ForgotReducer from "./forgotReducer";
import ProfileReducer from "./profileReducer";
import SetNewPasswordReducer from "./setNewPassReducer";


const reducer = combineReducers({
    login: LoginReducer,
    registration: RegistrationReducer,
    forgot: ForgotReducer,
    profile: ProfileReducer,
    setNewPass: SetNewPasswordReducer
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store