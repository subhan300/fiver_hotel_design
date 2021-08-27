import React from 'react'
import "./banner.css"

function Banner({banner,banner_text}) { 
    console.log(banner,"url",banner_text)
    return (
        <div className="general_banner" style={{backgroundImage:`linear-gradient(to bottom, rgb(0,0,0,0.6), rgb(0,0,0,0.3) ),url(${banner})`}} >
            <div className="general_banner_container">
                <h1>{banner_text}</h1>
            </div>
        </div>
    )
}

export default Banner

