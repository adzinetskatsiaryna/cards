
import React, {useState} from 'react';

import {useDispatch, useSelector} from "react-redux";

const Search=(props)=>{


    const updateSearch = (e )=> {
       props.setSearchValue(e.target.value);

    }

    return(
   <div className="search-form">
        <input className="search" type="text" value={props.searchValue}
               onChange={updateSearch}
        />
        <button className="search-button" type="submit"
        placeholder={'search'}>
            Search
        </button>
    </div>
    )
}
export default Search;