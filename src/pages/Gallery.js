import React from 'react'
import Navbar from '../components/Global-components/Navbar'
import { graphql } from 'gatsby'

// Gallery Components imports
import GalleryBanner from '../components/Gallery-screen/GalleryBanner'

import '../styles/Gallery=comp-styles/GallerySub.css'
import GalleryImage from '../components/Gallery-screen/GalleryImage'

// carousel import
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'


// images
import image1 from '../assets/images/gallery1.png'
import image2 from '../assets/images/gallery2.png'
import image3 from '../assets/images/gallery3.png'
import image4 from '../assets/images/gallery4.png'
import address_component from '../components/address_component/address_component'
import Lepasta_Component from '../components/lepasta_component/Lepasta_Component'
import Footer from '../components/Global-components/Footer'


function Gallery({data},props) {
 
    const banner1_title = data.allContentfulGalleryPage.nodes[0].banners[0].title
    const banner1_img= data.allContentfulGalleryPage.nodes[0].banners[0].file.url
    const banner2_img= data.allContentfulGalleryPage.nodes[0].banners[1].file.url
    const section1Title=data.allContentfulGalleryPage.nodes[0].section1Title
    const gallery_section=data.allContentfulGalleryPage.nodes[0].gallery1


    console.log(section1Title)
  




    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        responsive: [
            {breakpoint: 400, settings: {slidesToShow: 1}},
            {breakpoint: 500, settings: {slidesToShow: 1.25}},
            {breakpoint: 700, settings: {slidesToShow: 1.5}},
            {breakpoint: 900, settings: {slidesToShow: 2}},
            {breakpoint: 1200, settings: {slidesToShow: 3}},
        ],
        slidesToScroll: 1,
        // autoplay: true, 
    };
    
    return (
        <div>
            <Navbar/>
            <GalleryBanner  banner_img={banner1_img} title={banner1_title}  />
            {/* <GallerySub/> */}
            <div className="gallery_sub">
            <h1>{section1Title}</h1>
            <br />
            <div className="g_btn">
                <button>all</button>
                <button>cbo</button>
                <button>vini</button>
                <button>event</button>
            </div>
            <br />
            <div className="gallery_bottom">
                {/* <GalleryImage
                    image={result.galleryImages.file.url}
                    heading={result.galleryimageHeading}
                    detail={result.galleryimageContent.galleryimageContent}
                /> */}
             
               {gallery_section.map(val=>{
                   return(
                    <GalleryImage
                    image={val.file.url}
                    heading={val.title}
                    detail={val.description}
                />

                   )
               })}


            </div>
               
               
            <Slider {...settings} className="slick_slider">

            {gallery_section.map(val=>{
                   return(
                    <GalleryImage
                    image={val.file.url}
                    heading={val.title}
                    detail={val.description}
                />

                   )
               })}

            </Slider>
        </div>
        <div className="gallery_bottom_image" style={{backgroundImage:`url(${banner2_img})`}}></div> 
        <address_component />
        <Lepasta_Component />
        <Footer />
        </div>
    )
}

export default Gallery
export const query = graphql`
{
    allContentfulGalleryPage {
      nodes {
        banners {
          file {
            url
          }
          title
        }
        section1Title
        gallery1 {
          title
          description
          file {
            url
          }
        }
      }
    }
  }
`
