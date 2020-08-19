import React, {useState} from "react";

import '../cards/cards.css';

const UpdateCardsGrade = (props) => {
    const [grade, setGrade] = useState(0);

    const onChangeGrade = (e) => {
        setGrade(e.currentTarget.value);
    }

    const onGradeClick = () => {

        props.onClick(props.card, grade)
    };

    return (
        <div className='modal'>
            <input type='number' value={grade} placeholder={"put the grade"} onChange={onChangeGrade}/>
            <button onClick={onGradeClick}>Ok</button>
        </div>
    )
};

export default UpdateCardsGrade;