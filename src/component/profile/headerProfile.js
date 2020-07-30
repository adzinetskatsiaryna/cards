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

    return(
        <div>
            <h2>PROFILE</h2>
            <div>
                <span>UserName</span>
                <span>UserPhoto</span>
                <span>{props.name}</span>
            </div>
            <button onClick={logaut}>logaut</button>

        </div>
    )
}

export default HeaderProfile