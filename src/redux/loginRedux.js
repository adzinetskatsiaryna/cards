import {api} from "../api/api";

const initialState = {
    email: null,
    password: null,
    rememberMe: null
    // name: null,
    // isAdmin: false,
    // rememberMe: false,
    // token: null,
    // tokenDeathTime: null,
    // success: false
};

const LoginReducer = (state=initialState, action)=>{
   switch (action.type) {
       case 'LOGIN_SUCCESS':
           return {
               ...state,
               email: action.email,
               password: action.password,
               rememberMe: action.rememberMe
           };
       default: return state
   }
};

const loginSuccess=(email, password, rememberMe)=>(
    {
        type: 'LOGIN_SUCCESS',
        email,
        password,
        rememberMe
    }
);

export const login = (email, password, rememberMe)=>(dispatch)=>{
    api.login(email, password, rememberMe).then(res=>{
        dispatch(loginSuccess(res.data.email, res.data,password, res.data.rememberMe))
    })
};

export default LoginReducer