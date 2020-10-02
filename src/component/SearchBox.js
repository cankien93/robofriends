import React from 'react';



const SearchBox = ({searchfield, searchchange}) => {
    return (
        <div>
            <label for="searchbox">Search</label>
            <input 
                type = 'text' 
                id='searchbox'
                placeholder='input here'
                onChange = {searchchange}
            />
        </div>        
    )
};

export default SearchBox;