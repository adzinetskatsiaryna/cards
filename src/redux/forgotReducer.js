import {api} from "../api/api";

const initialState={
   success: false,
    isLoading: false,
    isDisabled: false,
    error: false
};

const ForgotReducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'FORGOT_SUCCESS':
            return{
                ...state,
                success: true,
            };
        case 'FORGOT_LOADING_SWITCHING':
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case 'FORGOT_DISABLED_SWITCHING':
            return {
                ...state,
                isDisabled: action.isDisabled
            };
        case 'FORGOT_SET_ERROR':
            return {
                ...state,
                error: action.value
            };
        default: return state
    }
};

export const forgotSuccess = ()=>({
    type:'FORGOT_SUCCESS',

});

const loading = (isLoading)=>(
    {
        type: 'FORGOT_LOADING_SWITCHING',
        isLoading
    }
);
const disabled = (isDisabled)=>(
    {
        type: 'FORGOT_DISABLED_SWITCHING',
        isDisabled
    }
);

const forgotError = (value) => ({
    type: 'FORGOT_SET_ERROR',
    value
});

export const forgotPassword = (email)=>(dispatch)=>{

    dispatch(disabled(true));
    dispatch(loading(true));
    api.forgot(email).then(res=>{
        dispatch(forgotSuccess());
        dispatch(disabled(false));
        dispatch(loading(false));
    }).catch(error=>{
       // console.log(error.response);
        dispatch(forgotError(error.response.data.error));
        dispatch(disabled(false));
        dispatch(loading(false));
    })
};

export default ForgotReducer