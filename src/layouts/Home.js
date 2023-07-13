import React from 'react'
import LeftMenu from './LeftMenu'
import HomeContent from './HomeContent'

export default function Home() {
  return (
  <div>
      <h2>Home</h2>
      {/* <h2>Left Menu</h2>
      <h2>Home Content</h2> */}
      <LeftMenu/>
      <HomeContent/>
  </div>
  )
}
