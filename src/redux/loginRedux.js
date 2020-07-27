import {api} from "../api/api";

const initialState = {

    success: false,
    isLoading: false,
    error: ''
};

const LoginReducer = (state=initialState, action)=>{
   switch (action.type) {
       case 'LOGIN_SUCCESS':
           return {
               ...state,
               success: true,
              isLoading: false,
               error: ''
           };
       default: return state
   }
};

const loginSuccess=()=>(
    {
        type: 'LOGIN_SUCCESS',
    }
);



export const login = (email, password, rememberMe)=>(dispatch)=>{
    //dispatch(loading())
    api.login(email, password, rememberMe).then(res=>{

        dispatch(loginSuccess())
    }
    ).catch(error => {
       // dispatch(error(error))
    })
};

export default LoginReducer