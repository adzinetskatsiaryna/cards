import {api} from "../api/api";

const initialState = {
    success: false,
    isLoading: false,
    error: '',

};

const LoginReducer = (state=initialState, action)=>{
   switch (action.type) {
       case 'LOGIN_SUCCESS':
           return {
               ...state,
               success: true,
           };
       case 'LOGIN_LOADING_SWITCHING':
           return {
               ...state,
               isLoading: action.isLoading,
           };

       case 'LOGIN_SET_ERROR':
           return {
               ...state,
               error: action.value
           };

       default: return state
   }
};

const loginSuccess=()=>(
    {
        type: 'LOGIN_SUCCESS',
    }
);
const loading = (isLoading)=>(
    {
        type: 'LOGIN_LOADING_SWITCHING',
        isLoading
    }
);

const loginError = (value) => ({
    type: 'LOGIN_SET_ERROR',
    value
});


export const login = (email, password, rememberMe)=>(dispatch)=>{
    dispatch(loading(true));
    api.login(email, password, rememberMe).then(response=>{
        localStorage.setItem('rememberMe', response.data.rememberMe);
        localStorage.setItem('token', rememberMe ? JSON.stringify(response.data.token) : "");
       // let token = localStorage.getItem('token');
        dispatch(loginSuccess());

        dispatch(loading(false));

    }).catch(error => {
         console.log(error.response)
        dispatch(loginError(error.response.data.error));
        dispatch(loading(false));
    })
};

export default LoginReducer