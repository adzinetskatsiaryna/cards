import React, {useCallback, useEffect} from "react";
import HeaderProfile from "./headerProfile";
import {LOGIN_PATH} from "../routes";
import {Redirect} from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import {initialized, logaut} from "../../redux/profileReducer";
import AddFile from "../common/AddFile";

const ProfilePage = (props)=>{
    const dispatch = useDispatch();

    const {name}=useSelector((store)=>{
        return store.profile
    });
    const {avatar}=useSelector((store)=>{
        return store.profile
    });

    const {success}=useSelector((store)=>{
        return store.login
    });

    useEffect(()=>{
       dispatch(initialized())
    }, []);

     const onClickLogaut= useCallback( ()=>
    {
        dispatch(logaut());

    }, [dispatch]);

     if(!success){
         return <Redirect to={LOGIN_PATH} />
     }
    // if(!localStorage.getItem('token')){
    //     return <Redirect to={LOGIN_PATH} />
    // }


    return (
        <div>
          <HeaderProfile name={name} avatar={avatar} {...props} logaut={onClickLogaut}/>
            <AddFile/>
        </div>
    )
};


export default  ProfilePage