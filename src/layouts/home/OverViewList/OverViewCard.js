import React from 'react'
import OverViewValues from '../homeContent/overViewCardList/OverViewValues';
import OverViewButton from '../homeContent/overViewCardList/OverViewButton';
import Graph from '../homeContent/overViewCardList/Graph';



export default function OverViewCard({ data }) {
    const { bgColor } = data;
    return (
        <div style={{ backgroundColor: bgColor, height:'150px', borderRadius: '5px',padding:'5px' }}>
            <div style={{ display: "flex" ,justifyContent:'space-between'}}>
                <OverViewValues />
                <OverViewButton />
            </div>
        <Graph/>
        </div>
    )
}
