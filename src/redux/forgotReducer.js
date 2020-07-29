import {api} from "../api/api";

const initialState = {
  success:false
};

 const ForgorPasswordReducer = (state=initialState, action)=>{
   switch (action.type) {
       case 'RESERT-PASSWORD-SUCESS':
           return {
               ...state,
               email:action.email,
           };

       default: return state
   }
};
export const forgotPasswordSuccess = (email)=>(
    {
        type: 'RESERT-PASSWORD-SUCESS',
        email
    }
);


export const forgotPassword = (email)=>(dispatch)=>{
        api.forgotRegistration(email).then(res=>{
            dispatch(forgotPasswordSuccess(res.data.email))
           // dispatch(loading(false))

        })
            .catch(error=>{
                //dispatch(error(error.message))
               // dispatch(loading(false))

            })
}
export default ForgorPasswordReducer;

