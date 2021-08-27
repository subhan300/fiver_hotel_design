import React from 'react'
import "./Menu_banner.css"

function Menu_banner({banner_title}) { 
    return (
        <div className="menu_banner" >
            <div className="menu_banner_container">
                <h1>{banner_title}</h1>
            </div>
        </div>
    )
}

export default Menu_banner

