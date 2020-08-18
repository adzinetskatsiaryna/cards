import React, {useState} from "react";

const Search = ({onSearch})=>{
const [sortName, setSortName]=useState('');
const [minValue,setMinValue]=useState(0);
const [maxValue,setMaxValue]=useState(5);


    const onChangeValue = (e)=>{
        setSortName(e.currentTarget.value)
    };
    const onClickButton = ()=>{
        onSearch(sortName)
    };
   const onMinValueChange=(e)=>{
      setMinValue(e.currentTarget.value)
  }
   const onMaxValueChange=(e)=>{
       setMaxValue(e.currentTarget.value)
   }


    return (
        <div>
            <input type='text' value={sortName} onChange={onChangeValue} />
            <button onClick={onClickButton}>search</button>

            <div>
                <input type="range"  step='0.01' min="0" max="5"  onChange={ onMinValueChange}/>
                <input type="range" step='0.01'  min="0" max="5"  onChange={onMaxValueChange}/>

                <div className="minValue"><span> Min value: </span>{minValue}</div>
                <div className="maxValue"> <span> Max value: </span>{maxValue}</div>

            </div>
        </div>
    )
};



export default Search;



