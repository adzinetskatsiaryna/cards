import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {CARDS, FORGOT_PATH, LOGIN_PATH, PACKS, PROFILE_PATH, REGISTRATION_PATH, SET_NEW_PASSWORD_PATH} from "../routes";
import style from './header.module.css'

const Header = (props) => {
    const [isShow, setShow] = useState(false);
    const activatedShowHeader = () => {
        setShow(true)
    };
    const deactivatedShowHeader = () => {
        setShow(false)
    };


    return (
        <div >
            {!isShow && <div className={style.headerWrapper}>
                <NavLink to={LOGIN_PATH}>LOGIN</NavLink>
                <NavLink to={REGISTRATION_PATH}>REGISTRATION</NavLink>
                <NavLink to={FORGOT_PATH}>FORGOT</NavLink>
                <NavLink to={PROFILE_PATH}>PROFILE</NavLink>
                <NavLink to={SET_NEW_PASSWORD_PATH}>SET NEW PASSWORD</NavLink>
                <NavLink to={PACKS}>PACKS</NavLink>
                <button onClick={activatedShowHeader}>hide header</button>
            </div>}
            {isShow && <button onClick={deactivatedShowHeader}>show header</button>}
        </div>
    )
};

export default Header