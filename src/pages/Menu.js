import React from 'react'
import "../components/menu/menu.css"
import Menu_banner from "../components/menu/menu_banner/Menu_banner"
import Menu_Sections from "../components/menu/menu_section/Menu_section"
// import "../styles/Globalstyle.css"
import AddressComponent from "../components/address_component/address_component"
import LepastaComponent from "../components/lepasta_component/Lepasta_Component"
import Lepasta from "../components/lepasta_component/Lepasta_Component"
import Address_component from "../components/address_component/address_component"
import Navbar from '../components/Global-components/Navbar'
function menu() {
    return (
        <div className="menu">
              <Navbar />
              <Menu_banner banner_title="Menu" />

              <div className="menu_container">
                    
                    <Menu_Sections />
                   
                    <AddressComponent />
                    <LepastaComponent />
                
              </div>
            
        </div>
    )
}

export default menu
