import React from "react";
import {LOGIN_PATH} from "../routes";
import {Redirect} from "react-router-dom";

const HeaderProfile = (props)=>{

    const logaut = ()=>{
        localStorage.setItem('token', JSON.stringify(null));
       let token= localStorage.getItem('token');
        if(token===null){
        return <Redirect to={LOGIN_PATH}/>}
    };

    return (
        <div>
            <h2>PROFILE</h2>
            <div>
                <span>UserName</span>
                <span>UserPhoto</span>
                <div><span>User's name is : {props.name}</span>
                </div>
            </div>
            <button
                onClick={props.logout}
            >logaut
            </button>

        </div>
    )
}

export default HeaderProfile