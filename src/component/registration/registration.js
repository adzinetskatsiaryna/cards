import React from "react";
import RegistrationForm from "./registrationForm";
import {NavLink} from "react-router-dom";
import {LOGIN_PATH} from "../routes";

const RegistrationPage = (props)=>{
    return (
        <div>
           <h2>REGISTRATION</h2>
            <RegistrationForm/>
            <NavLink to={LOGIN_PATH}>Login</NavLink>
        </div>
    )
};
export default RegistrationPage