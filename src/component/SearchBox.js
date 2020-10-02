import React from 'react';



const SearchBox = ({searchfield, searchchange}) => {
    return (
        <div>
            <label for="search">Search</label>
            <input 
                type = 'text' 
                placeholder='input here'
                onChange = {searchchange}
            />
        </div>        
    )
};

export default SearchBox;