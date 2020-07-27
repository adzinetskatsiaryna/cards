import React from "react";
import {Redirect, Route} from "react-router-dom";
import LoginPage from "./login/login";
import RegistrationPage from "./registration/registration";
import ForgotPage from "./forgot/forgot";
import ProfilePage from "./profile/profile";
import SetNewPasswordPage from "./setNewPass/setNewPassWord";

export const LOGIN_PATH = '/login';
export const REGISTRATION_PATH = '/registration';
export const FORGOT_PATH = '/forgot';
export const PROFILE_PATH = '/profile';
export const SET_NEW_PASSWORD_PATH = '/setNewPassword';


const Routes = (props)=>{
    return (
        <div>
            <Route exact path ={'/'} render={()=> <Redirect to={LOGIN_PATH} />} />
            <Route exact path ={LOGIN_PATH} render={()=> <LoginPage/>} />
            <Route  path ={REGISTRATION_PATH} render={()=> <RegistrationPage/>} />
            <Route  path ={FORGOT_PATH} render={()=> <ForgotPage/>} />
            <Route  path ={PROFILE_PATH} render={()=> <ProfilePage/>} />
            <Route path ={SET_NEW_PASSWORD_PATH} render={()=> <SetNewPasswordPage/>} />
        </div>
    )
}
export default Routes