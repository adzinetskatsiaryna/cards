import {api} from "../api/api";

const initialState = {
    // addedUser: {
    //     email: '',
    //     isAdmin: false,
    // },
    email: '',
    success: false,
    error:'',
    isLoading: false,
    isDisabled: false,
};

const RegistrationReducer = (state=initialState, action)=>{
   switch (action.type) {
       case 'REGISTRATION_SUCCESS':
           return {
               ...state,
               success: true,
               email: action.email
           };
       case 'REGISTRATION_LOADING_SWITCHING':
           return {
               ...state,
               isLoading: action.isLoading
           };
       case 'REGISTRATION_DISABLED_SWITCHING':
           return {
               ...state,
               isDisabled: action.isDisabled
           };
           debugger
       case 'REGISTRATION_ERROR':
           return {
               ...state,
               error: action.value
           };

       default: return state
   }
};
export const registrationSuccess = (email)=>(
    {
        type: 'REGISTRATION_SUCCESS',
        email
    }
);

const loading = (isLoading)=>(
    {
        type: 'REGISTRATION_LOADING_SWITCHING',
        isLoading
    }
);
const disabled = (isDisabled)=>({
    type: 'REGISTRATION_DISABLED_SWITCHING',
    isDisabled
});
export const registrationError = (value)=>({
    type: 'REGISTRATION_ERROR',
    value
});

export const registration = (email, password)=>(dispatch)=>{
    dispatch(disabled(true));
    dispatch(loading(true));
        api.registration(email, password).then(res=>{
            dispatch(registrationSuccess(res.email));
            dispatch(disabled(false));
            dispatch(loading(false));
        })
            .catch(error=>{
                console.log(error.response)
if(error.response.status===500){
    dispatch(registrationError('this user is already registred'))
}else {
    dispatch(registrationError(error.response.data.error))
}

                dispatch(disabled(false));
                dispatch(loading(false));
            })
}

export default RegistrationReducer