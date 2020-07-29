import {api} from "../api/api";

const initialState = {
    success: false,
    isLoading: false,
    error: '',
    isDisabled: false,
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
       case 'LOGIN_DISABLED_SWITCHING':
           return {
               ...state,
               isDisabled: action.isDisabled
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
const disabled = (isDisabled)=>(
    {
        type: 'LOGIN_DISABLED_SWITCHING',
        isDisabled
    }
);

const loginError = (value) => ({
    type: 'LOGIN_SET_ERROR',
    value
});


export const login = (email, password, rememberMe)=>(dispatch)=>{
    dispatch(disabled(true));
    dispatch(loading(true));
    api.login(email, password, rememberMe).then(res=>{
        if(res.success===true){
            localStorage.setItem('token', JSON.stringify(res.token))
        }
       // let token = localStorage.getItem('token');
        dispatch(loginSuccess());
        dispatch(disabled(false));
        dispatch(loading(false));

    }).catch(error => {
        dispatch(loginError(error.error));
        dispatch(disabled(false));
        dispatch(loading(false));
    })
};

export default LoginReducer