import {api} from "../api/api";
import {loginLogautSuccess, loginSuccess} from "./loginRedux";

const initialState={
    initialized: false,
    name:"",

}

const ProfileReducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return{
                ...state,
                initialized: true
            };

        case "LOGAUT_SUCCESS":
            return {
                ...state,
                initialized: false
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

const logoutSuccess=()=>(
    {
    type:"LOGAUT_SUCCESS"
});

const setUserData = (name)=>({
    type: 'SET_USER_NAME',
   name,

});

export const initialized = ()=>(dispatch)=>{
   const token = localStorage.getItem('token');
    api.authMe(token).then(response=>{
        dispatch(initializedSuccess());
        dispatch(setUserData(response.data.name))
        localStorage.setItem('token',response.data.token)
    })
        .catch( (error)=> {
            localStorage.setItem('token',error.response.data.token)
        } )
};


export const logout =()=>(dispatch)=>{
    debugger

    localStorage.removeItem('token');
    debugger
    dispatch(loginLogautSuccess());
    dispatch(logoutSuccess());
}

export default ProfileReducer