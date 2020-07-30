import {api} from "../api/api";

const initialState={
    initialized: false,
    name: null,

}

const ProfileReducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return{
                ...state,
                initialized: true
            };
        case 'SET_USER_NAME':
            return {
                ...state,
                name: action.value
            };
        default: return state
    }
};

const initializedSuccess = ()=>(
    {
        type: 'INITIALIZED_SUCCESS'
    }
);
const setUserData = (value)=>({
    type: 'SET_USER_NAME',
    value
});

export const initialized = ()=>(dispatch)=>{

   const token = localStorage.getItem('token');
    api.authMe(token).then(res=>{
        dispatch(initializedSuccess());
        dispatch(setUserData(res.name))
    })
};

export default ProfileReducer