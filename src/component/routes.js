import React from "react";
import {Redirect, Route} from "react-router-dom";
import LoginPage from "./login/login";
import RegistrationPage from "./registration/registration";
import ForgotPage from "./forgot/forgot";
import ProfilePage from "./profile/profile";
import SetNewPasswordPage from "./setNewPass/setNewPassWord";
import PacksPage from "./packs/packs";
import CardsPage from "./cards/cards";
import LearnPage from "./learn/learnPage";

export const LOGIN_PATH = '/login';
export const REGISTRATION_PATH = '/registration';
export const FORGOT_PATH = '/forgot';
export const PROFILE_PATH = '/profile';
export const SET_NEW_PASSWORD_PATH = '/setNewPassword';
export const PACKS = '/packs';
export const CARDS = '/cards';
export const LEARN = '/learnPage';



const Routes = (props)=>{
    return (
        <div>
            <Route exact path ={'/'} render={()=> <Redirect to={LOGIN_PATH} />} />
            <Route exact path ={LOGIN_PATH} render={()=> <LoginPage/>} />
            <Route  path ={REGISTRATION_PATH} render={()=> <RegistrationPage/>} />
            <Route  path ={FORGOT_PATH} render={()=> <ForgotPage/>} />
            <Route  path ={PROFILE_PATH} render={()=> <ProfilePage/>} />
            <Route path ={SET_NEW_PASSWORD_PATH} render={()=> <SetNewPasswordPage/>} />
            <Route path ={PACKS} render={()=> <PacksPage/>} />
            <Route path ={CARDS+'/:id'} render={()=> <CardsPage/>} />
            <Route path ={LEARN+'/:id'} render={()=> <LearnPage/>} />
        </div>
    )
}
export default Routes