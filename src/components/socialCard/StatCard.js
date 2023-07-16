import React from 'react'

export default function StatCard({value,title}) {
  return (
    <div>
        <p style={{fontWeight:'bold',margin:'0px',padding
        :'0px',alignContent:'center',alignItems:'center'}}>{value}</p>
        <p style={{fontSize:'12px',color:'gray',margin:'0px',padding:'0px'}}>{title.toUpperCase()}</p>
    </div>
  )
}
