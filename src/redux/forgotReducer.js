import {api} from "../api/api";

const initialState={
   success: false,
    //email: ''
};

const ForgotReducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'FORGOT_SUCCESS':
            return{
                ...state,
                success: true,
               // email: action.email
            };
        default: return state
    }
};

export const forgotSuccess = ()=>({
    type:'FORGOT_SUCCESS',

});

export const forgotPassword = (email)=>(dispatch)=>{
    api.forgot(email).then(res=>{
        dispatch(forgotSuccess())
    }).catch(error=>{

    })
};

export default ForgotReducer