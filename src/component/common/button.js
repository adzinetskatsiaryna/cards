import React from "react";


const Button =(props)=>{
    return (
        <button type={props.type} onClick={props.onClick}
                disabled={props.disabled}
        >{props.title}</button>
    )
}

export default Button