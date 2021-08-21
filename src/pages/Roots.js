import React from 'react'

import Root_section_1 from "../components/roots_component/Root_section_1"


import Menu_banner from '../components/menu/menu_banner/Menu_banner';
import Root_secion_2 from '../components/roots_component/root_section_2/Root_secion_2';
import Root_section_3 from '../components/roots_component/root_section_2/root_section3/Root_section_3';


function Roots() {
    return (
        <div>
           
                <Menu_banner className="roots_banner_title_div bd_red" banner_title="Roots"  />

                <Root_section_1 />
                <Root_secion_2 />
                <Root_section_3 />
                
               
            
        </div>
    )
}

export default Roots

