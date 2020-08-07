import React, {useCallback, useEffect} from "react";
import HeaderProfile from "./headerProfile";
import {LOGIN_PATH} from "../routes";
import {Redirect} from "react-router-dom";
import {connect, useDispatch, useSelector} from "react-redux";
import {initialized} from "../../redux/profileReducer";
import {login} from "../../redux/loginRedux";


const ProfilePage = (props)=>{
    const dispatch = useDispatch();

    const {name}=useSelector((store)=>{
        return store.profile
    });

    useEffect(()=>{
       dispatch(initialized())
    }, []);

    const logaut = ()=>{
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('token');
        return ''
    };

    // const kkkk= useCallback( ()=>
    // {
    //
    //     dispatch(ffff())
    // }, [dispatch]);


   let token = JSON.parse(localStorage.getItem('token'));
    if(!localStorage.getItem('token')){
        return <Redirect to={LOGIN_PATH} />
    }

    return (
        <div>
          <HeaderProfile name={name} {...props} logaut={logaut}/>
        </div>
    )
};


export default  ProfilePage