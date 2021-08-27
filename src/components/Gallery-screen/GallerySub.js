import React from 'react'
import '../../styles/Gallery=comp-styles/GallerySub.css'
import GalleryImage from '../Gallery-screen/GalleryImage'

// carousel import
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'



import image1 from '../../assets/images/gallery1.png'
import image2 from '../../assets/images/gallery2.png'
import image3 from '../../assets/images/gallery3.png'
import image4 from '../../assets/images/gallery4.png'

function GallerySub() {
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
        <>
        <div className="gallery_sub">
            <h1>La gelleria della Bontá</h1>
            <div className="g_btn">
                <button>all</button>
                <button>cbo</button>
                <button>vini</button>
                <button>event</button>
            </div>
            <div className="gallery_bottom">
                <GalleryImage
                    image={image1}
                    heading="Insalata Mista"
                    detail="Baby Gems & Baby Arugula, Radish, Fennel, Cucumber, 
                        Carrot, House Vinaigrette"
                />
                <GalleryImage
                    image={image2}
                    heading="Insalata Mista"
                    detail="Baby Gems & Baby Arugula, Radish, Fennel, Cucumber, 
                        Carrot, House Vinaigrette"
                />
                <GalleryImage
                    image={image3}
                    heading="Insalata Mista"
                    detail="Baby Gems & Baby Arugula, Radish, Fennel, Cucumber, 
                        Carrot, House Vinaigrette"
                />
                <GalleryImage
                    image={image4}
                    heading="Insalata Mista"
                    detail="Baby Gems & Baby Arugula, Radish, Fennel, Cucumber, 
                        Carrot, House Vinaigrette"
                />
            </div>
            <Slider {...settings} className="slick_slider">
                <GalleryImage
                    image={image1}
                    heading="Insalata Mista"
                    detail="Baby Gems & Baby Arugula, Radish, Fennel, Cucumber, 
                        Carrot, House Vinaigrette"
                />
                <GalleryImage
                    image={image2}
                    heading="Insalata Mista"
                    detail="Baby Gems & Baby Arugula, Radish, Fennel, Cucumber, 
                        Carrot, House Vinaigrette"
                />
                <GalleryImage
                    image={image3}
                    heading="Insalata Mista"
                    detail="Baby Gems & Baby Arugula, Radish, Fennel, Cucumber, 
                        Carrot, House Vinaigrette"
                />
                <GalleryImage
                    image={image4}
                    heading="Insalata Mista"
                    detail="Baby Gems & Baby Arugula, Radish, Fennel, Cucumber, 
                        Carrot, House Vinaigrette"
                />
            </Slider>
        </div>
        <div className="gallery_bottom_image"></div>
    </>
    )
}

export default GallerySub
