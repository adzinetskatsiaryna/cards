import React, {useCallback, useEffect, useState} from "react";
import {LOGIN_PATH} from "../routes";
import {Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";

const HeaderProfile = (props)=> {




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