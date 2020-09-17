import {api} from "../api/api";
import {loginLogautSuccess, loginSuccess} from "./loginRedux";


const initialState={
    initialized: false,
    name: '',
    avatar:'',
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
        case 'LOAD_AVATAR_SUCCESS':
            return {
                ...state,
                avatar: action.avatar
            };
        case 'SET_USER_AVATAR':
            return {
                ...state,
                avatar:action.ava
            }
        default: return state
    }

};


const setUserData = (name)=>({
    type: 'SET_USER_NAME',
    name
});


const  setUserAvatar =(ava)=>({
    type:'SET_USER_AVATAR',
        ava
})
const loadAvatarSucess =(avatar)=>({
    type:"LOAD_AVATAR_SUCCESS",
    avatar
});

export const initialized = ()=>(dispatch,getState)=>{
   const token = localStorage.getItem('token');
   const success=getState().login.success;
   if(!success)
    api.authMe(token).then(response=>{
        dispatch(loginSuccess());
        dispatch(setUserData(response.data.name));
         dispatch(setUserAvatar(response.data.avatar));
        localStorage.setItem('token', response.data.token)
    }) .catch((error)=>{
        localStorage.setItem('token', error.response.data.token)
    })
};

export const loadAvatar =(avatar)=>(dispatch)=>{
       api.sendFile(avatar).then(response=>{
        dispatch(loadAvatarSucess(response.data.updatedUser.avatar));
    })
}

// export const logaut = ()=>(dispatch)=>{
//     localStorage.removeItem('token');
//     dispatch(loginLogautSuccess());
//     dispatch(logautSuccess());
// };

export const logaut =()=>(dispatch)=>{
    api. logautMe().then( res=>{
        dispatch(loginLogautSuccess());
    })
};



export default ProfileReducer