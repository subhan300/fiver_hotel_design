import React from 'react'

import Root_section_1 from "../components/roots_component/Root_section_1"
import { graphql } from 'gatsby';

// import Menu_banner from '../components/menu/menu_banner/Menu_banner';
import Root_secion_2 from '../components/roots_component/root_section_2/Root_secion_2';
import Root_section_3 from '../components/roots_component/root_section_2/root_section3/Root_section_3';
import Lepasta from "../components/lepasta_component/Lepasta_Component"
import Address_component from "../components/address_component/address_component"
import Navbar from '../components/Global-components/Navbar'
import Footer from "../components/Global-components/Footer"
import Banner from '../components/roots_component/banner/Banner';
function Roots({data}) {
    console.log(data.allContentfulRoot.nodes[0])

    const banner_text=data.allContentfulRoot.nodes[0].rootBanners[0].title
    const banner1img=data.allContentfulRoot.nodes[0].rootBanners[0].file.url
    console.log(banner1img,"1img url")
    const banner2img=data.allContentfulRoot.nodes[0].rootBanners[1].file.url
    const banner3img=data.allContentfulRoot.nodes[0].rootBanners[2].file.url

    
    const section1_title=data.allContentfulRoot.nodes[0].section1Title
    const section1_Text=data.allContentfulRoot.nodes[0].section1Text

    const section2_title=data.allContentfulRoot.nodes[0].section2Title


    const gallery=data.allContentfulRoot.nodes[0].section2Gallery


    return (
        <div>
                <Navbar />
                {/* <Menu_banner banner={banner1img} banner_text={banner_text}   className="roots_banner_title_div bd_red"   /> */}
               <Banner banner={banner1img} banner_text={banner_text}  />
                <Root_section_1 section1title={section1_title} section1Text={section1_Text} />
                <Root_secion_2  banner={banner2img}          />
                <Root_section_3 banner={banner3img} title={section2_title}  gallery={gallery}  />
                <Address_component />
                <Lepasta />
                <Footer />
               
            
        </div>
    )
}

export default Roots

export const query = graphql`
{
    allContentfulRoot {
      nodes {
        rootBanners {
          file {
            url
          }
          title
        }
        section1Text
        section1Title
        section2Gallery {
          file {
            url
          }
          title
          description
        }
        section2Title
      }
    }
  }
  
`