import React, {useState} from "react";

const UpdateCard = (props)=>{

    const[question,setQuestion]=useState("");
    const[grade,setGrade]=useState(0);
    const [answer,setAnswer]=useState('');

    const onChangeQuestion = (e)=>{
        setQuestion(e.currentTarget.value)
    };

    const onChangeAnswer = (e)=>{
        setAnswer(e.currentTarget.value)
    };

    const onChangeGrade = (e)=>{
        setGrade(e.currentTarget.value)
    };
    const onButtonClick = ()=>{
        props.onClick(props.card,answer,question,grade)
    }

    return (
        <div>
            <input type='text' value={question} onChange={onChangeQuestion}/>
            <input type='text' value={answer} onChange={onChangeAnswer}/>
            <input type='text' value={grade} onChange={onChangeGrade}/>
            <button onClick={onButtonClick}>ok</button>
        </div>
    )
}
export default UpdateCard;