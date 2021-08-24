import React from 'react'
import "./Contact_banner.css"
function Contact_banner({banner_title}) {
   
    
    return (
        <div className="contact_banner" >
            <div className="contact_banner_container">
                   <h1>{banner_title}</h1>
            </div>
            
        </div>
    )
}

export default Contact_banner

