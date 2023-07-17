import React from 'react'
import SecondoryNavLeft from './secondoryNavBar/SecondoryNavLeft'
import SecondoryNavRight from './secondoryNavBar/SecondoryNavRight'

export default function SecondNavBar() {
    return (
        <div style={{display:'flex',border:'2px white outset',justifyContent:'space-between'}}>
            <SecondoryNavLeft />

            <SecondoryNavRight />
        </div>
    )
}
