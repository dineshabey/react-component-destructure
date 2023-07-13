import React from 'react'
import PrimaryNavBar from './homeContent/PrimaryNavBar'
import SecondNavBar from './homeContent/SecondNavBar'
import OverView from './homeContent/OverView'
import TraficGraphe from './homeContent/TraficGraphe'
import SocialStatus from './homeContent/SocialStatus'

export default function HomeContent() {
  return (
    <div>
      {/* <h2>HomeContent</h2> */}
      <PrimaryNavBar />
      {/* <p>Primary nav bar</p> */}
      <SecondNavBar />
      {/* <p>2nd nav bar</p> */}
      <OverView />
      {/* <p>List of member online - OverViewList</p> */}
      <TraficGraphe />
      {/* <p>Trafic Graph</p> */}
      <SocialStatus />
      {/* <p>Social Status</p> */}
    </div>
  )
}
