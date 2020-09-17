import {api} from "../api/api";

const initialState={
  success:false
};

const SetNewPasswordReducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'SET_NEW_PASSWORD_SUCCEESS':
            return{
                ...state,
               success:true
            };
        default: return state
    }
};

 const setNewPasswordAC=()=>({
    type:'SET_NEW_PASSWORD_SUCCEESS',
})
export const setNewPassword=(newPassword,token)=>(dispatch)=>{
    return api.setNewPassword(newPassword,token).then(res=>{
        dispatch(setNewPasswordAC())
    })
}

export default SetNewPasswordReducer