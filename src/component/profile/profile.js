import React, {useCallback, useEffect} from "react";
import HeaderProfile from "./headerProfile";
import {LOGIN_PATH} from "../routes";
import {Redirect} from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import {initialized, logaut} from "../../redux/profileReducer";

const ProfilePage = (props)=>{
    const dispatch = useDispatch();

    const {name}=useSelector((store)=>{
        return store.profile
    });

    useEffect(()=>{
       dispatch(initialized())
    }, []);

     const onClickLogaut= useCallback( ()=>
    {
        dispatch(logaut());
        return <Redirect to={LOGIN_PATH} />
    }, [dispatch]);


    if(!localStorage.getItem('token')){
        return <Redirect to={LOGIN_PATH} />
    }

    return (
        <div>
          <HeaderProfile name={name} {...props} logaut={onClickLogaut}/>
        </div>
    )
};


export default  ProfilePage