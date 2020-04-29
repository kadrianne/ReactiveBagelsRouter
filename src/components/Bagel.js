import React from 'react';

export default function Bagel(props){
    const {bagel, action} = props

    function handleClick(){
        action(bagel)
    }
    return(
        <div className='bagel-listing' onClick={handleClick} >
                <h1>{bagel.type}</h1>
        </div>
    )
}