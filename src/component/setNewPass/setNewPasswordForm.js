import React, {useCallback, useState} from "react";
import Input from "../common/input";
import Button from "../common/button";

import {useParams} from "react-router";

const SetNewPassWordForm = (props) => {
    const [password1, setPassword1]=useState("");
    const[password2,setPassword2]=useState('');

    const changePassword1 = (e)=>{
       setPassword1(e.currentTarget.value)
    };
    const changePassword2 = (e)=>{
        setPassword2(e.currentTarget.value)
    };
  const {token}=useParams();

   const  onChangePassword=()=>{
       if(password1===password2){
           props.setNewPassword(password1,token)
       }else{
           return "not variable Email"
       }
   }



    return (
        <div>
            <form>
                <input value={password1} onChange={changePassword1} />
                <input  value={password2} onChange={changePassword2}/>
                <button onClick={onChangePassword}>ON</button>
            </form>
        </div>
    )
};

export default SetNewPassWordForm