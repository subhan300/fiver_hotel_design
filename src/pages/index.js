import React from 'react'
import '../styles/Global-comp-styles/index.css'
import '../styles/Home-comp-styles/BannerSub.css'
import Address_component from "../components/address_component/address_component" 
// global components
import Navbar from '../components/Global-components/Navbar'

// Home screen components
import Banner from '../components/Home-screen/Banner'
import BannerSub from '../components/Home-screen/BannerSub'

import Lepasta from "../components/lepasta_component/Lepasta_Component"
function index() {
  return (
    <div>
      {/* <Navbar/>
      <Banner/>
      <BannerSub/>
      <BannerSub
        cname="reverse_row"
      /> */}
      <Address_component />
      <Lepasta />
    </div>
  )
}

export default index
