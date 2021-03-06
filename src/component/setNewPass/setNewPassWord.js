import React, {useState} from "react";
import SetNewPassWordForm from "./setNewPasswordForm";
import {LOGIN_PATH} from "../routes";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setNewPassword} from "../../redux/setNewPassReducer";

const SetNewPasswordPage = (props)=>{
const dispatch=useDispatch();

   const setNewPass=(newPassword,token)=>{
       dispatch(setNewPassword(newPassword,token))
   }


    return (
        <div>
            <h2>SET NEW PASSWORD</h2>
            <SetNewPassWordForm {...props} setNewPassword={setNewPass}/>
            <NavLink to={LOGIN_PATH}>Login</NavLink>
        </div>
    )
};
export default SetNewPasswordPage