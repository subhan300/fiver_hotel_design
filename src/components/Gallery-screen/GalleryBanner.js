import React from 'react'
import '../../styles/Gallery=comp-styles/GalleryBanner.css'

function GalleryBanner({banner_img,title}) {
    return (
        <div className="gallery" style={{backgroundImage:`url(${banner_img})`}}>
            <div className="gallery_text">
            <h1>{title}</h1>
            </div>
        </div>
    )
}

export default GalleryBanner
