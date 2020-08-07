import React, {useCallback, useEffect} from "react";
import HeaderProfile from "./headerProfile";
import {LOGIN_PATH, PROFILE_PATH} from "../routes";

import { useDispatch, useSelector} from "react-redux";
import {initialized, logout} from "../../redux/profileReducer";
import {Redirect} from "react-router-dom";



const ProfilePage = (props)=>{
    const dispatch = useDispatch()
    const {name}=useSelector((store)=>{
        return store.profile
    });

    useEffect(() => {
        dispatch(initialized())
    }, []);


    const onClickLogaut = useCallback(() => {
        debugger
            dispatch(logout());

            return <Redirect to={LOGIN_PATH}/>
        }, [dispatch]
    );

     if(!localStorage.getItem('token')){
         return <Redirect to={LOGIN_PATH}/>
     }

    return (
        <div>
            <HeaderProfile name={name}{...props} logout={onClickLogaut}/>
        </div>
    )
};


export default ProfilePage