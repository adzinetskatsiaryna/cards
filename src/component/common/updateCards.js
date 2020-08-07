import React, {useState} from "react";

const UpdateCards = (props)=>{
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [grade, setGrade] = useState(0);
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
        props.onClick(props.card, question, answer, grade)
    };

    return(
        <div>
            <input type='text' value={question} placeholder={'add new question'} onChange={onChangeQuestion} />
            <input type='text' value={answer} placeholder={'add new answer'} onChange={onChangeAnswer} />
            <input type='text' value={grade} placeholder={'add new question'} onChange={onChangeGrade} />
            <button onClick={onButtonClick}>Ok</button>
        </div>
    )
};

export default UpdateCards