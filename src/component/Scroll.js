import React from 'react';

const Scroll = (props) => {
    return (
        <div className='pa4 ma4 vh-75-ns overflow-y-scroll '>
            {props.children}
        </div>
    );
};
export default Scroll;