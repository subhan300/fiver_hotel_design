import React from 'react'
import { graphql } from 'gatsby';
import '../styles/Global-comp-styles/index.css'
import '../styles/Home-comp-styles/BannerSub.css'
import '../styles/Home-comp-styles/Banner.css'
import image from '../assets/images/Main Hero 1.png'


// global components


// Home screen components
import Banner from '../components/roots_component/banner/Banner'
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
import "../styles/Home-comp-styles/Banner.css"
import Footer from "../components/Global-components/Footer"
function index({data}) {
  const childComponent = <OrderButton/>
  const result = data.allContentfulHome.edges[0].node
  const banner_title=data.allContentfulHome.edges[0].node.bannerText
  console.log(result)
  return (
    <div>
      <Navbar />
      <Banner banner={result.bannerImage.file.url} banner_text={banner_title} />
      <br />
      <BannerSub
        banner={result.allsectionImages[0].file.url}
        mainh1={result.section1Heading}
        
        para={result.section1Content.section1Content}
        secBottomh1={result.section2Heading}
        secBottomText={result.section2Content.section2Content}
        lowerImage={result.bannerImage2.file.url}
      />
      <BannerSub
        banner={result.allsectionImages[1].file.url}
        mainh1={result.section2Heading}
        para={result.section3Content.section3Content}
        secBottomh1={result.section4Heading}
        secBottomText={result.section4Content.section4Content}
        lowerImage={result.bannerImage3.file.url}
        cname="reverse_row"
        childComponent={childComponent}
      />
      <br></br>< br />
      <Address_component />
      <br /> <br />
      <Lepasta />
      <Footer />
    </div>

  )
}

export default index
export const query = graphql`
{
  allContentfulHome {
    edges {
      node {
        bannerText
      
        bannerImage {
          file {
            url
          }
        }
        section1Heading
        section1Content {
          section1Content
        }
        allsectionImages {
          file {
            url
          }
        }
        section2Heading
        section2Content {
          section2Content
        }
        section3Heading
        section3Content {
          section3Content
        }
        section4Heading
        section4Content {
          section4Content
        }
        bannerImage2 {
          file {
            url
          }
        }
        bannerImage3 {
          file {
            url
          }
        }
      }
    }
  }
}
 `
