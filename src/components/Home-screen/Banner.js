import React from 'react'
import '../../styles/Home-comp-styles/Banner.css'

function Banner({banner_title}) {
    return (
        <div className="banner">
            <div className="banner_contentBx bd_red">
               <h1>{banner_title}</h1>
                
            </div>
        </div>
    )
}

export default Banner
