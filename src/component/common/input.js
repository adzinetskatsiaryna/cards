import React from "react";

const Input =(props)=>{

    const onChanged = (e)=>{
        const target = e.currentTarget;
        const value = target.name === 'email' || 'password' ? target.value : target.checked;
        props.handelInputChange(value, target.name)
    }

    return (
        <input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={onChanged}
            checked={props.checked}
        />
    )
};

export default Input

