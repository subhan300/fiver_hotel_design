import React from 'react'
import "./Menu_section.css"


import Vector_1 from "../../../assets/images/Vector-1.png"

import Vector_2 from "../../../assets/images/Vector-2.png"
import Vector_3 from "../../../assets/images/Vector-3.png"
import Vector_4 from "../../../assets/images/VectorA-4.png"
import Vector_5 from "../../../assets/images/Vector-5.png"
import Vector_4b from "../../../assets/images/VectorB-4.png"

function Menu_section() {
    return (
        <div className="menu_sections">
            <div className="menu_sections_container ">
                  <div className="menu_sections_container_content">
                       <form className="form_menu">
                          {/* {[1,2,3,4].map((val)=>{
                              return(
                               <> */}


                             <fieldset className="form_field">
                                <legend className="legend">Antipasti</legend>
                               {[1,2,3,4].map((val)=>{
                                   return(
                                    <div className="legend_content">
                                    
                                    <div className="legend_content_col-1">
                                        <p className="legend_content_col-1_text">Carciofo alla Romana con Fonduta di Pecorino e Olive Taggiasche</p>
                                        <p className="legend_content_col-1_text2">Burrata Cheese with Sicilian Sun-Dried Tomato, Braised Leeks, Basil EVO</p>
                                    </div>
                                 <div className="legend_content_col legend_content_col-2"> </div>
                              <span className="legend_content_col legend_content_col-3 ">2</span>

                            </div>
                                   )
                               })}
                            
                         
                              </fieldset>
                                         
                              <div className={`vector_side-${1}`} ><img src={Vector_1} className="vector_side_img"></img></div>
                       
                       <br /> <br />


                       {/* 2             *********************************************** */}










                       <fieldset className="form_field">
                                <legend className="legend">Antipasti</legend>
                               {[1,2,3,4].map((val)=>{
                                   return(
                                    <div className="legend_content">
                                    
                                    <div className="legend_content_col-1">
                                        <p className="legend_content_col-1_text">Carciofo alla Romana con Fonduta di Pecorino e Olive Taggiasche</p>
                                        <p className="legend_content_col-1_text2">Burrata Cheese with Sicilian Sun-Dried Tomato, Braised Leeks</p>
                                    </div>
                              <hr className="legend_content_col legend_content_col-2"></hr>
                              <span className="legend_content_col legend_content_col-3 ">2</span>

                            </div>
                                   )
                               })}
                            
                            
                              </fieldset>
                                         
                              <div className={`vector_side-${2}`} ><img src={Vector_2} className="vector_side_img"></img></div>
                       
                       <br /> <br />

                       {/* 3 ************************************************************* */}



                       <fieldset className="form_field">
                                <legend className="legend">Antipasti</legend>
                               {[1,2,3,4].map((val)=>{
                                   return(
                                    <div className="legend_content">
                                    
                                    <div className="legend_content_col-1">
                                        <p className="legend_content_col-1_text">Carciofo alla Romana con Fonduta di Pecorino e Olive Taggiasche</p>
                                        <p className="legend_content_col-1_text2">Burrata Cheese with Sicilian Sun-Dried Tomato, Braised Leeks, </p>
                                    </div>
                              <hr className="legend_content_col legend_content_col-2"></hr>
                              <span className="legend_content_col legend_content_col-3 ">2</span>

                            </div>
                                   )
                               })}
                            
                            
                              </fieldset>
                                         
                              <div className={`vector_side-${3}`} ><img src={Vector_3} className="vector_side_img"></img></div>
                       
                       <br /> <br />



                       {/* 3          *************************** */}



                       <fieldset className="form_field">
                                <legend className="legend">Antipasti</legend>
                               {[1,2,3,4].map((val)=>{
                                   return(
                                    <div className="legend_content">
                                    
                                    <div className="legend_content_col-1">
                                        <p className="legend_content_col-1_text">Carciofo alla Romana con Fonduta di Pecorino e Olive Taggiasche</p>
                                        <p className="legend_content_col-1_text2">Burrata Cheese with Sicilian Sun-Dried Tomato, Braised Leeks, </p>
                                    </div>
                              <hr className="legend_content_col legend_content_col-2"></hr>
                              <span className="legend_content_col legend_content_col-3 ">2</span>

                            </div>
                                   )
                               })}
                            
                            
                              </fieldset>
                                         
                              <div style={{marginTop:"1px"}}  className={`vector_side-${4}`} >
                                  <img src={Vector_4} className="vector_side_img"></img></div>
                                  <div style={{marginTop:"3rem"}}  className={`vector_side-${4}`} >
                                  <img src={Vector_4b} className="vector_side_img"></img></div>
                       
                       <br /> <br />


                       {/* 4****************** */}

                       <fieldset className="form_field">
                                <legend className="legend">Antipasti</legend>
                               {[1,2,3,4].map((val)=>{
                                   return(
                                    <div className="legend_content">
                                    
                                    <div className="legend_content_col-1">
                                        <p className="legend_content_col-1_text">Carciofo alla Romana con Fonduta di Pecorino e Olive Taggiasche</p>
                                        <p className="legend_content_col-1_text2">Burrata Cheese with Sicilian Sun-Dried Tomato, Braised Leeks, Basil EVO, & Garlic Chips</p>
                                    </div>
                              <hr className="legend_content_col legend_content_col-2"></hr>
                              <span className="legend_content_col legend_content_col-3 ">2</span>

                            </div>
                                   )
                               })}
                            
                            
                              </fieldset>
                                         
                              <div className={`vector_side-${1}`} ><img src={Vector_1} className="vector_side_img"></img></div>
                       
                       <br /> <br />
                        
                       <fieldset className="form_field">
                                <legend className="legend">Antipasti</legend>
                               {[1,2,3,4].map((val)=>{
                                   return(
                                    <div className="legend_content">
                                    
                                    <div className="legend_content_col-1">
                                        <p className="legend_content_col-1_text">Carciofo alla Romana con Fonduta di Pecorino e Olive Taggiasche</p>
                                        <p className="legend_content_col-1_text2">Burrata Cheese with Sicilian Sun-Dried Tomato, Braised Leeks, Basil EVO, & Garlic Chips</p>
                                    </div>
                              <hr className="legend_content_col legend_content_col-2"></hr>
                              <span className="legend_content_col legend_content_col-3 ">2</span>

                            </div>
                                   )
                               })}
                            
                            
                              </fieldset>
                                         
                              <div className={`vector_side-${2}`} ><img src={Vector_5} className="vector_side_img"></img></div>
                       
                       <br /> <br />






 






                 
                       </form>
                  </div>
            </div>
            
        </div>
    )
}

export default Menu_section
