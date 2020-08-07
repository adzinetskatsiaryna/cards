import {api} from "../api/api";
import {loginLogautSuccess, loginSuccess} from "./loginRedux";

const initialState={
    initialized: false,
    name: '',
}

const ProfileReducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return{
                ...state,
                initialized: true
            };
        case 'LOGAUT_SUCCESS':
           return  {
                ...state,
               initialized: false,
        };
        case 'SET_USER_NAME':
            return {
                ...state,
                name: action.name
            };
        default: return state
    }
};

const initializedSuccess = ()=>(
    {
        type: 'INITIALIZED_SUCCESS'
    }
);
const setUserData = (name)=>({
    type: 'SET_USER_NAME',
    name
});

const logautSuccess = ()=>({
    type: 'LOGAUT_SUCCESS'
});

export const initialized = ()=>(dispatch)=>{

   const token = localStorage.getItem('token');
    api.authMe(token).then(response=>{
        dispatch(initializedSuccess());
        dispatch(setUserData(response.data.name));
        localStorage.setItem('token', response.data.token)
    }) .catch((error)=>{
        localStorage.setItem('token', error.response.data.token)
    })
};

export const logaut = ()=>(dispatch)=>{
    localStorage.removeItem('token');
    dispatch(loginLogautSuccess());
    dispatch(logautSuccess());
};

export default ProfileReducer