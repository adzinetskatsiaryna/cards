import {api} from "../api/api";

const initialState={
  isAuth:false
};

export const AuthMeReducer =(state=initialState,action)=> {
    switch (action.type) {
        case 'AUTH_ME_SUCCESS':
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
};

 export const AuthMeSuccess = (isAuth)=>(
        {
            type: 'AUTH_ME_SUCCESS',
            isAuth
        }
    );

    export const isAuth=(token)=>(dispatch)=>{
        api.authMe(token).then(response=>{
            debugger
            if(response.success===true) {
                dispatch(AuthMeSuccess(response.data))
            }
        })
    }