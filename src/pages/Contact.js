import React from 'react'
import "../components/menu/menu.css"

import AddressComponent from "../components/address_component/address_component"
import LepastaComponent from "../components/lepasta_component/Lepasta_Component"


import Navbar from '../components/Global-components/Navbar'
// import Menu_banner from '../components/menu/menu_banner/Menu_banner'
import Contact_banner from '../components/contact/Contact_banner'
import Contactus_section1 from "../components/contact/Contactus_section1"
import Contact_banner_bottom from '../components/contact/contact_banner_bottom/Contact_banner_bottom'
import Footer from "../components/Global-components/Footer"
import Banner from '../components/roots_component/banner/Banner'
import { graphql } from 'gatsby'
function menu({data}) {
       console.log(data.allContentfulContact.nodes[0].contactBanners[0].title)
       const banner_title=data.allContentfulContact.nodes[0].contactBanners[0].title
       const banner_img1=data.allContentfulContact.nodes[0].contactBanners[0].file.url


       const banner_img2=data.allContentfulContact.nodes[0].contactBanners[1].file.url


       const title=data.allContentfulContact.nodes[0].contactSection1Title
       const text=data.allContentfulContact.nodes[0].contactSection1Text
    return (
        <div className="menu">
              <Navbar />
             <Banner banner={banner_img1} banner_text={banner_title} />
              <Contactus_section1 title={title} text={text} />
             
              {/* <Contact_banner_bottom /> */}
              <Banner  banner={banner_img2}  />
             {/* <div className="space_height"></div> */}
               <AddressComponent />
              <LepastaComponent />
              
              <Footer />
             
                    
                   
                   
                
            
        </div>
    )
}

export default menu

export const query=graphql`
{
    allContentfulContact {
      nodes {
        contactSection1Text
        contactSection1Title
        contactBanners {
          file {
            url
          }
          title
        }
      }
    }
  }
  
`