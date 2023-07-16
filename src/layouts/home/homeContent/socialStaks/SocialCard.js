import React from 'react'
import SocialIon from '../../../../components/socialCard/SocialIon'
import StatCard from '../../../../components/socialCard/StatCard'

export default function SocialCard() {
    return (
        <div style={{ backgroundColor: "white",border:"1px solid grey",borderRadius:"5px" }}>
            <SocialIon />
            <div style={{ display: "flex", alignContent: "center", alignItems: "center", justifyContent: "space-between" }}>
                <StatCard />
                <div style={{ borderLeft: "2px solid black", height: "30px" }}>

                </div>
                <StatCard />
            </div>

        </div>
    )
}
