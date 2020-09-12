import React, {useState} from "react";



export const AddPack=(props)=>{
    const [name,setName]=useState('');

    const onChangeValue=(e)=>{
        setName(e.currentTarget.value);
    }
    const onAddPackName=(name)=>{
 props.onHandlerAddPack(name)
    }

    return(
        <div>
            <input value={name} placeholder={"put name"} onChange={onChangeValue}/>
            <button onClick={onAddPackName}>OK</button>
        </div>
    )
}
