import React from 'react'
import "./lepasta_component.css"
function Lepasta_Component() {
    return (
        <div className="Lepasta_component">
            <div className="lepastacontainer">
                 <div className="lepasta_container_content">
                    <h1 className="lepasta_title">C'e' Posta</h1>
                    <p className="lepasta_text">Sign up for our newsletter</p>
                  <form>
                
                   <fieldset className="lepasta_emailBox_fieldset"> 
                          <legend className="lepasta_emailBox_legend">Your email</legend>
                           <div className="lepasta_emailBox"><p>example@email.com |</p></div>
                 </fieldset>
                  </form>
                    <button className="lepasta_btn address_content_reserveBtn">SUBMIT</button>
                 </div>
            </div>
            
        </div>
    )
}

export default Lepasta_Component

