import React from 'react'

export default function SocialIon({icon,bgColor,name}) {
  return (
    <div style={{backgroundColor:bgColor,padding:"15px"}}>
      <img src={icon}  style={{width:'20%'}} alt={name}></img>
    </div>
  )
}
