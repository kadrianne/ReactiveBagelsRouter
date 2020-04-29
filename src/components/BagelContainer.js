import React from 'react'
import Bagel from './Bagel'

export default function BagelContainer(props){
    const bagels = props.bagels.map(bagel => {
        return <Bagel key={bagel.id} bagel={bagel} action={props.action}/>
    })

    return (
        <section className='bagels'>
            {bagels}
        </section>
    )
}