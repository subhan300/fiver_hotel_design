import React from 'react'

import Root_section_1 from "../components/roots_component/Root_section_1"


import Menu_banner from '../components/menu/menu_banner/Menu_banner';
import Root_secion_2 from '../components/roots_component/root_section_2/Root_secion_2';
import Root_section_3 from '../components/roots_component/root_section_2/root_section3/Root_section_3';
import Lepasta from "../components/lepasta_component/Lepasta_Component"
import Address_component from "../components/address_component/address_component"
import Navbar from '../components/Global-components/Navbar'

function Roots() {
    return (
        <div>
                <Navbar />
                <Menu_banner className="roots_banner_title_div bd_red" banner_title="Roots"  />

                <Root_section_1 />
                <Root_secion_2 />
                <Root_section_3 />
                <Address_component />
                <Lepasta />
                
               
            
        </div>
    )
}

export default Roots

