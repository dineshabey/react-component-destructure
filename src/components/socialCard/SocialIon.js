import React from 'react'

export default function SocialIon({icon,bgColor}) {
  return (
    <div style={{backgroundColor:bgColor,padding:"15px"}}>
      <img src={icon} style={{width:'20%'}}></img>
    </div>
  )
}
