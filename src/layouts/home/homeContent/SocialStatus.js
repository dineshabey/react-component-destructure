import React from 'react'
import SocialCard from './socialStaks/SocialCard'

export default function SocialStatus() {
    return (
        <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <div style={{ padding: "10px", width: "100%" }}>  <SocialCard /></div>
            <div style={{ padding: "10px", width: "100%" }}> <SocialCard /></div>
            <div style={{ padding: "10px", width: "100%" }}> <SocialCard /></div>

        </div>
    )
}
