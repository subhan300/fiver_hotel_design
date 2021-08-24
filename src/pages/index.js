import React from 'react'
import '../styles/Global-comp-styles/index.css'
import '../styles/Home-comp-styles/BannerSub.css'

// global components


// Home screen components
import Banner from '../components/Home-screen/Banner'
import BannerSub from '../components/Home-screen/BannerSub'
import OrderButton from '../components/Home-screen/OrderButton'

// sub banner assets imports
import subBanner from '../assets/images/IMG_5334 1.png'
import bottomImage from '../assets/images/IMG_6118 1.png'
import subBanner2 from "../assets/images/5383002 1.png"
import bottomImage2 from '../assets/images/IMG_6113 1.png'
import Lepasta from "../components/lepasta_component/Lepasta_Component"
import Address_component from "../components/address_component/address_component"
import Navbar from '../components/Global-components/Navbar'


function index() {
  const childComponent = <OrderButton/>
  return (
    <div>
      <Navbar />
      <Banner />
      <BannerSub
        banner={subBanner}
        mainh1=
        {`Cucina Verace - \nTrue Italian Cuisine`}
        para="
          La Stella represents more than just a restaurant concept.
          It is an immersive and truly authentic - verace - Italian
          dining experience comprised of immense passion and creativity."
        secBottomh1="La Stella - The Star amongst stars"
        secBottomText="
          Our name represents a promise to ourselves and to 
          our customers.  We set the benchmark for the finest 
          Italian dining experience in North Texas."
        lowerImage={bottomImage}
      />
      <BannerSub
        banner={subBanner2}
        mainh1={`Le nostre origini - \nwhere we come from`}
        para="
          Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit. Malesuada interdum aenean et volutpat commodo 
          mattis nec gravida scelerisque."
        secBottomh1="Fatto con amore - Prepared with love"
        secBottomText="
          Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit. Massa faucibus purus vitae eu donec etiam dui. 
          Malesuada volutpat egestas faucibus aenean venenatis 
          eu. Pellentesque lacus id nulla convallis at quis 
          erat nulla id. Interdum accumsan pharetra sit fames 
          tristique sit phasellus. In enim aliquet massa nunc 
          ut quis aenean. Ut vehicula facilisi cum semper vestibulum 
          sem accumsan sit."
        lowerImage={bottomImage2}
        cname="reverse_row"
        childComponent={childComponent}
      />
      <br></br>< br />
      <Address_component />
      <br /> <br />
      <Lepasta />

    </div>

  )
}

export default index
