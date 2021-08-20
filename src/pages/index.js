import React from 'react'
import '../styles/Global-comp-styles/index.css'
import '../styles/Home-comp-styles/BannerSub.css'

// global components
import Navbar from '../components/Global-components/Navbar'

// Home screen components
import Banner from '../components/Home-screen/Banner'
import BannerSub from '../components/Home-screen/BannerSub'


function index() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <BannerSub/>
      <BannerSub
        cname="reverse_row"
      />
    </div>
  )
}

export default index
