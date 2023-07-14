import React from 'react'
import PrimaryNavBar from './homeContent/PrimaryNavBar'
import SecondNavBar from './homeContent/SecondNavBar'

import TraficGraphe from './homeContent/TraficGraphe'
import SocialStatus from './homeContent/SocialStatus'
import OverViewList from './homeContent/OverViewList'

export default function HomeContent() {
  return (
    <div style={{backgroundColor:"green",width:"100%"}}>
      <PrimaryNavBar />
      <SecondNavBar />
      <OverViewList />
      <TraficGraphe />
      <SocialStatus />
    </div>
  )
}
