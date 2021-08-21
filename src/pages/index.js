import React from 'react'
import '../styles/Global-comp-styles/index.css'
import '../styles/Home-comp-styles/BannerSub.css'

// global components
import Navbar from '../components/Global-components/Navbar'

// Home screen components
import Banner from '../components/Home-screen/Banner'
import BannerSub from '../components/Home-screen/BannerSub'

// sub banner assets imports
import subBanner from '../assets/images/IMG_5334 1.png'
import bottomImage from '../assets/images/IMG_6118 1.png'
import subBanner2 from "../assets/images/IMG_6113 1.png"
import bottomImage2 from '../assets/images/IMG_6113 1.png'
import Lepasta from "../components/lepasta_component/Lepasta_Component"
import Address_component from "../components/address_component/address_component" 
import {graphql} from "gatsby"


function index({data}) {
  console.log("data",data.allContentfulHomePage.nodes)
  return (
    <div>
      <Navbar/>
      <Banner banner_title="Raggiungi le stelle - reach for the stars" />
      <BannerSub
        banner={subBanner}
        mainh1=
          {`Cucina Verace - \n
          True Italian Cuisine`}
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
        mainh1={`Le nostre origini - \n 
          where we come from`}
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
      />
      <br></br><br></br> <br></br><br></br>
      <Address_component />
      <Lepasta />

    </div>

  )
}

export default index
export const query=graphql`

{
  allContentfulHomePage {
    nodes {
      allSectionsImages {
        file {
          url
        }
      }
      bannerImg {
        file {
          url
        }
      }
      bannerTitle
      section1Title
      section1Para {
        section1Para
      }
      section2Title
      section3Title
      section3Para
      section4Para
      section4Title
      section5ShortText {
        section5ShortText
      }
      section5ShortText3
      section5Title
      section5bShortText2
      section5bShortText3
      section5bText2b
      section5bText3b
      section5bTitle
      seection5ShortText2
    }
  }
}
`