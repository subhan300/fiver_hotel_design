import React from 'react'
import '../../styles/Gallery=comp-styles/GalleryImage.css'

function GalleryImage(props) {
    return (
        <div className="gallery_img">
            <img src={props.image} alt="" />
            <div className="hover_img">
                <h2> {props.heading} </h2>
                <p>
                    {props.detail}
                </p>
            </div>
        </div>
    )
}

export default GalleryImage