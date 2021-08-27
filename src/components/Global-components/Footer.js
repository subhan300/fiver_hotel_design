import React from 'react'
import "../../styles/Global-comp-styles/Footer.css"
import logo from '../../assets/images/Logo Black text.png'
import icon1 from "../../assets/images/footer_icon1.png"
import insta from "../../assets/images/footer_instagram.png"

function Footer() {
    return (
        <div className="footer">
         <div className="footer_container bd_yellow">
              
                     <div className="logo">
                          <img src={logo} alt="" />
                     </div>
                      <br />
                      <p className="footer_container_text">Aliquam vel diam tellus eu orci vel urna, ut eget. Semper cursus tristique orci adipiscing neque, feugiat est at. Phasellus ero</p>
                      <br />
                      <div className="footer_container_row">
                          <div className="footer_container_row_col"><img src={icon1}></img></div>
                          <div className="footer_container_row_col"><img src={icon1}></img></div>
                          <div className="footer_container_row_col"><img src={icon1}></img></div>
                         



                      </div>
              



         </div>

         <div className="footer_container_contentBottom">
                      <hr className="footer_hr"></hr>
                      <br />
                      <div className="footer_contentBottom_row">
                            <div className="footer_contentBottom_col">
                                     <p>All right reserved by La Stella Cucina Verace</p>
                            </div>
                            <div className="footer_contentBottom_col">
                                <p>Terms & conditions</p>
                            </div>
                      </div>
                     
         </div>


        </div>
    )
}

export default Footer
