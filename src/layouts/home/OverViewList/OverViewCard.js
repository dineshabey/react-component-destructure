import React from 'react'
import OverViewValues from '../homeContent/overViewCardList/OverViewValues';
import OverViewButton from '../homeContent/overViewCardList/OverViewButton';



export default function OverViewCard({ data }) {
    const {bgColor} = data;
    return (
        <div style={{ backgroundColor: bgColor ,width:'100%'}}>
            <OverViewValues/>
            <OverViewButton/>
            <p>Setting Button</p>
            <p>Graph</p>
        </div>
    )
}
