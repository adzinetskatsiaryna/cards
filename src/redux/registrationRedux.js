import {api} from "../api/api";

const initialState = {
    // addedUser: {
    //     //     email: "",
    //     //     isAdmin: false,
    //     // },
    email:'',
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
               email:action.email,
               success: true,
               // addedUser: {...state.addedUser,
               // email: action.email,
               //     isAdmin: false
               // }
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

export const loading = (isLoading)=>(
    {
        type: 'REGISTRATION_LOADING_SWITCHING',
        isLoading
    }
);
 export const disabled = (isDisabled)=>({
    type: 'REGISTRATION_DISABLED_SWITCHING',
    isDisabled
});
export const registractionError = (error)=>({
    type: 'REGISTRATION_ERROR',
    error
}
)

export const registration = (email, password)=>(dispatch)=>{
    dispatch(loading(true))
   dispatch(disabled(true))
        api.registration(email, password).then(res=>{
            dispatch(registrationSuccess(res.data.email))
           dispatch(loading(false))
           dispatch(disabled(false))
        })
            .catch(error=>{
                dispatch(registractionError(error))
               dispatch(loading(false))
              // dispatch(disabled(false))
            })
}

export default RegistrationReducer