import React from 'react'
import "./Root_section_3.css"
import RootBanner from "../../../../assets/images/root_section3_banner.png"
function Root_section_3() {
    return (
        <div className="root_section3 ">
            <h1 className="root_section3_title">La Squadra</h1>
            <div className="root_section3_container ">
                  <div className="root_section3_container_col root_section3_container_col-1 ">
                      <img className="root_section3_img" src="https://c8.alamy.com/comp/MB6YT5/cook-chef-logo-or-label-restaurant-concept-cartoon-vector-illustration-MB6YT5.jpg"></img>
                     <div className="root_section3_content">
                         <h1>Riccardo Ravaglia</h1>
                         <p>Our name represents a promise to ourselves and to our customers.</p>
                     </div>
                  </div>

                  <div className="root_section3_container_col root_section3_container_col-2 ">
                      <img className="root_section3_img" src="https://c8.alamy.com/comp/MB6YT5/cook-chef-logo-or-label-restaurant-concept-cartoon-vector-illustration-MB6YT5.jpg"></img>
                      <div className="root_section3_content">
                      <h1>John Dal Canton</h1>
                      <p>Our name represents a promise to ourselves and to our customers.</p>
                      </div>
                  </div>

                  <div className="root_section3_container_col root_section3_container_col-3 ">
                       <img className="root_section3_img" src="https://c8.alamy.com/comp/MB6YT5/cook-chef-logo-or-label-restaurant-concept-cartoon-vector-illustration-MB6YT5.jpg"></img>
                       <div className="root_section3_content">
                           <h1>Giuseppe JP Piccinini</h1>
                           <p>Our name represents a promise to ourselves and to our customers.</p>
                      </div>
                  </div>
            </div>















           {/* root_section3_banner  *********************************************************************** */}





    <div className="root_section3_banner  ">
        <img className="root_section3_banner_img" src={RootBanner}></img>
       
    </div>





        </div>
    )
}

export default Root_section_3
