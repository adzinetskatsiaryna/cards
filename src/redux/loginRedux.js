import {api} from "../api/api";

const initialState = {
    success: false,
    isLoading: false,
    error: '',
    isDisabled: false
};

const LoginReducer = (state=initialState, action)=>{
   switch (action.type) {
       case 'LOGIN_SUCCESS':
           return {
               ...state,
               success: true,
               // isLoading: action.isLoading,
               // error: action.value,
               // isDisabled: action.isDisabled
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
export const loading = (isLoading)=>(
    {
        type: 'LOGIN_LOADING_SWITCHING',
        isLoading
    }
);
export const disabled = (isDisabled)=>(
    {
        type: 'LOGIN_DISABLED_SWITCHING',
        isDisabled
    }
);

export const loginError = (value) => ({
    type: 'LOGIN_SET_ERROR',
    value
})

export const login = (email, password, rememberMe) => (dispatch) => {
    dispatch(loading(true))
    dispatch(disabled(true))
    api.login(email, password, rememberMe).then(res => {
            dispatch(loginSuccess())
            dispatch(loading(false))
            dispatch(disabled(false))
        }
    ).catch(error => {
        dispatch(loginError(error))
        dispatch(loading(false))
        dispatch(disabled(false))
    })
};

export default LoginReducer