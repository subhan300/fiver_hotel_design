import React from 'react'
import "./Root_section_2.css"
import Root_section2_img from "../../../assets/images/root_section2.png"
import Vector_root_img from "../../../assets/images/Vector_root_section2.png"
function Root_secion_2({banner}) {
    return (
        <div className="root_section2 ">
            <div className="root_section2_container ">
               
                        <img className="root_section2_img" src={banner}></img>
              
            </div>
            <div className="vector_root_1"><img className="vector_root_1_img" src={Vector_root_img}></img></div>
        </div>
    )
}

export default Root_secion_2
