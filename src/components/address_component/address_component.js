import React from 'react'
import "./address_component.css"
function address_component() {
    return (
        <div className="address_component">
            <div className="address_container">
                 <div className="col address_container_map">
                     
                 </div>
                 <div className="col address_container_content">
                      <h1 className="address_content_title">Address</h1>
                      <p className="address_content_text">La Stella Cucina Verace</p>
                      <p className="address_content_textlight">2330 Flora St #150, Dallas, TX 75201</p>
                      <br></br>
                      <h1 className="address_content_title">Hours</h1>
                      <p className="address_content_text">Sunday - Thursday</p>
                      <p className="address_content_textlight">11:00am - 11:00pm</p>
                      <button className="address_content_reserveBtn">Reserve</button>
                 </div>
            </div>

            <div className="space_height lineStar  address_container">
                <div className="col-hr">  <hr className="line_hr"></hr></div>
                 <div className="col-hr star_img_div"> <div className="star_img" ></div></div>
                 <div className="col-hr"> <hr className="line_hr-2"></hr></div>
            </div>

        </div>
    )
}

export default address_component
