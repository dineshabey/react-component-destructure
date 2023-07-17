import React from 'react'
import OverViewCard from '../OverViewList/OverViewCard'

const OverViewCardData = [
  {
    value: '45689',
    title: 'Member-Online',
    bgColor: 'orange'

  },
  {
    value: '11898',
    title: 'Member-Online',
    bgColor: '#0011'


  },
  {
    value: '75419',
    title: 'Member-Online',
    bgColor: 'yellow'

  },
  {
    value: '33157',
    title: 'Member-Online',
    bgColor: '#9856'


  },

];

export default function OverViewList() {

  return (
    <div style={{ display: "flex", width: '100%', justifyContent: 'space-around' }}>
      {OverViewCardData.map((val, key) => {
        return (
          <div style={{ padding: '10px',width:'100%' }}><OverViewCard key={key} data={val} /></div>
        )
      })}

    </div>
  )
}
