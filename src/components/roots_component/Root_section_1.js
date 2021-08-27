import React from 'react'
import "./Root_section_1.css"

function RootsComponent({section1title,section1Text}) {
    return (
        <div className="root ">
             <div className="root_container ">
                  <div className="root_container_content ">
    <h1 className="root_container_content_title">{section1title}</h1>
                
    <p className="root_container_content_text">{section1Text}</p>
                  </div>
             </div>
        </div>
    )
}

export default RootsComponent
