import React from 'react'
import SocialIon from '../../../../components/socialCard/SocialIon'
import StatCard from '../../../../components/socialCard/StatCard'
import SocialStatus from '../SocialStatus'

export default function SocialCard({ data }) {
    const { icon, bgcolor, left, right, title } = data;
    return (
        <div style={{ backgroundColor: "white", border: "1px solid grey", borderRadius: "5px" }}>
            <SocialIon icon={icon} bgColor={bgcolor} />
            <div style={{ display: "flex", alignContent: "center", alignItems: "center", justifyContent: "space-between" }}>
                <StatCard value={left.value} title={left.title} />
                <div style={{ borderLeft: "2px solid black", height: "30px" }}>

                </div>
                <StatCard value={right.value} title={right.title} />
            </div>

        </div>
    )
}
