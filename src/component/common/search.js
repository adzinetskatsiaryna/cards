import React, {useState} from "react";

const Search = ({onSearch})=>{
const [name, setName]=useState('');

    const onChangeValue = (e)=>{
        setName(e.currentTarget.value)
    };
    const onClickButton = ()=>{

    };

    return (
        <div>
            <input type='text' value={name} onChange={onChangeValue} />
            <button onClick={onClickButton}>search</button>
        </div>
    )
};

export default Search
