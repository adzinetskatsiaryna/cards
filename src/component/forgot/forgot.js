import React from "react";
import ForgotForm from "./ForgotForm";
import {LOGIN_PATH} from "../routes";
import {NavLink} from "react-router-dom";

const ForgotPage = (props)=>{
    return (
        <div>
            <h2>FORGOT</h2>
            <ForgotForm {...props} />
            <NavLink to={LOGIN_PATH}>Login</NavLink>
        </div>
    )
};
export default ForgotPage