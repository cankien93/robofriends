import React from 'react';
import Card from '../component/Card';


const CardList = ({robots}) => {
    const LoopRobo = robots.map((user, i)=>{
        return <Card key = {i}
            id={user.id} 
            name={user.name} 
            email={user.email}/>
    });
    return (
        <div>
            {LoopRobo}
        </div>
    );
};

export default CardList;