import React from 'react';



const SearchBox = ({searchfield, searchchange}) => {
    return (
        <input 
            type = 'text' 
            placeholder='input here'
            onChange = {searchchange}
        />
    )

};

export default SearchBox;