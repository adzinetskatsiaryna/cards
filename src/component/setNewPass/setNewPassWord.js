import React from "react";
import SetNewPassWordForm from "./setNewPasswordForm";
import {LOGIN_PATH} from "../routes";
import {NavLink} from "react-router-dom";

const SetNewPasswordPage = (props)=>{
    return (
        <div>
            <h2>SET NEW PASSWORD</h2>
            <SetNewPassWordForm {...props} />
            <NavLink to={LOGIN_PATH}>Login</NavLink>
        </div>
    )
};
export default SetNewPasswordPage