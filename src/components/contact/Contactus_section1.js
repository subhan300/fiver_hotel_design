import React from 'react'
import "./Contact_section1.css"


import Vector_2 from "../../assets/images/Vector-2.png"
import Vector_3 from "../../assets/images/Vector-3.png"

function Contactus_section1({title,text}) {
    return (
        <div className="contact_us ">
             <div className="contact_us_container ">
                  <div className="contact_us_container_section1 ">


    <h1 className="contact_us_container_section1_title">{title}</h1>
    <p className="contact_us_container_section1_text">{text}</p>
                        <div className="container_section1_row">

                               <div className="container_section1_col ">
                                 <form>
                                     <fieldset>
                                         <legend className="contact_legend">Name</legend>
                                        <input className="contact_legend_input" type="text" placeholder="Nick"></input>
                                     </fieldset>
                                 </form>
                                     
                               </div>
                               <div className="container_section1_col container_section1_col-2 ">
                                      <input type="email" placeholder="Email"></input>
                                     
                               </div>
                               
                        </div>
                        <div className="container_section1_row">

                             <div className="container_section1_col ">
                                  <input type="number" placeholder="Phone"></input>
      
                             </div>
                             <div className="container_section1_col ">
                                  <input type="text" placeholder="Subject"></input>
      
                             </div>


                        </div>

                        <div className="container_section1_row_3">
                             <div className="container_section1_col-3"><input type="text" placeholder="Message"></input></div>

                        </div>

                        
                      <br /><br />
                      <div type="button" className="address_content_reserveBtn">SUBMIT</div>
                  </div>   

                  <div style={{bottom:"-190px "}}  className={`vector_side-${3}`} >
                                  <img src={Vector_3} className="vector_side_img"></img>
              </div>
              <div style={{bottom:"-185px "}}  className={`vector_side-${2}`} >
                                  <img src={Vector_2} className="vector_side_img"></img>
              </div>
              </div>  

        




        </div>
    )
}

export default Contactus_section1

