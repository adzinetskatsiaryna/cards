import React, {useState} from "react";

import  '../cards/cards.css';

const UpdateCards = (props)=>{
    debugger
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const onChangeQuestion = (e)=>{
        setQuestion(e.currentTarget.value)
    };
    const onChangeAnswer = (e)=>{
        setAnswer(e.currentTarget.value)
    };
    // const onChangeGrade = (e)=>{
    //     setGrade(e.currentTarget.value)
    // };

    const onButtonClick = ()=>{
        debugger
        props.onClick(props.card, question, answer)
    };

    return(
        <div className='modal'>
            <input type='text' value={question} placeholder={'add new question'} onChange={onChangeQuestion} />
            <input type='text' value={answer} placeholder={'add new answer'} onChange={onChangeAnswer} />
            {/*<input type='text' value={grade} placeholder={'add new grade'} onChange={onChangeGrade} />*/}
            <button onClick={onButtonClick}>Ok</button>
        </div>
    )
};

export default UpdateCards