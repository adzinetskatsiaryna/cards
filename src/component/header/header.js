import React from "react";
import {NavLink} from "react-router-dom";
import {FORGOT_PATH, LOGIN_PATH, PROFILE_PATH, REGISTRATION_PATH, SET_NEW_PASSWORD_PATH} from "../routes";
import style from './header.module.css'

const Header = (props)=>{
    return (
        <div className={style.headerWrapper}>
            <NavLink to={LOGIN_PATH}>LOGIN</NavLink>
            <NavLink to={REGISTRATION_PATH}>REGISTRATION</NavLink>
            <NavLink to={FORGOT_PATH}>FORGOT</NavLink>
            <NavLink to={PROFILE_PATH}>PROFILE</NavLink>
            <NavLink to={SET_NEW_PASSWORD_PATH}>SET NEW PASSWORD</NavLink>
        </div>
    )
};

export default Header