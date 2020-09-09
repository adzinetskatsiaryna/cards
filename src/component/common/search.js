import React, {useState} from "react";

const Search = ({onSearch})=>{
const [sortName, setSortName]=useState('');

    const onChangeValue = (e)=>{
        setSortName(e.currentTarget.value)
    };
    const onClickButton = ()=>{
        onSearch(sortName)
    };
const [minValue, setMinValue]= useState(0);
const [maxValue, setMaxValue]=useState(5);
const onChangeMinValue = (e)=>{
    if(maxValue<=5){
        setMaxValue(e.currentTarget.value)
    }
};

const onChangeMaxValue = (e)=>{
    if(maxValue<=5){
        setMinValue(e.currentTarget.value)
    }
}

    return (
        <div>
            <div>
                <input type='text' value={sortName} onChange={onChangeValue}/>
                <button onClick={onClickButton}>search</button>
            </div>
            <div>
                <div>
                    <span>min Value:</span>
                    <input type='number' value={maxValue} onChange={onChangeMinValue}/>
                </div>
                <div>
                    <span>max Value:</span>
                    <input type='number' value={minValue} onChange={onChangeMaxValue}/>
                </div>
            </div>
        </div>
    )
};

export default Search
