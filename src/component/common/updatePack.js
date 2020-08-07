import React, {useState} from "react";

const UpdatePack = (props)=>{

    const[name,setName]=useState("");
    const[grade,setGrade]=useState(0)

    const onChangeName = (e)=>{
        setName(e.currentTarget.value)
        // props.onChangeNamePack(e.currentTarget.value)
    };
    const onChangeGrade = (e)=>{
        setGrade(e.currentTarget.value)
        // props.onChangeGradePack(e.currentTarget.value)
    };
    const onButtonClick = ()=>{
        props.onClick(props.pack,name,grade)
    }

    return (
        <div>
            <input type='text' value={name} onChange={onChangeName}/>
            <input type='text' value={grade} onChange={onChangeGrade}/>
            <button onClick={onButtonClick}>ok</button>
        </div>
    )
}
export default UpdatePack