import React, {useState} from "react";

const Search = ({onSearch})=>{
const [sortName, setSortName]=useState('');

    const onChangeValue = (e)=>{
        setSortName(e.currentTarget.value)
    };
    const onClickButton = ()=>{
        onSearch(sortName)
    };

    return (
        <div>
            <input type='text' value={sortName} onChange={onChangeValue} />
            <button onClick={onClickButton}>search</button>
        </div>
    )
};

export default Search
