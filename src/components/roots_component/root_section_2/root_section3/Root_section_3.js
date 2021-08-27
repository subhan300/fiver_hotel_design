import React from 'react'
import "./Root_section_3.css"
import RootBanner from "../../../../assets/images/root_section3_banner.png"
import Banner from '../../banner/Banner'
function Root_section_3({banner,gallery,title}) {
    
    return (
        <div className="root_section3 ">
            <h1 className="root_section3_title">{title}</h1>
            <div className="root_section3_container ">
                {gallery.map(val=>{
                   
                    return(
                        <div className="root_section3_container_col root_section3_container_col-1 ">
                        <img className="root_section3_img" src={val.file.url}></img>
                       <div className="root_section3_content">
                    <h1>{val.title}</h1>
                    <p>{val.description}</p>
                       </div>
                    </div>

                    )
                })}
                

            </div>















           {/* root_section3_banner  *********************************************************************** */}





    {/* <div className="root_section3_banner  ">
        <img className="root_section3_banner_img" src={RootBanner}></img>
       
    </div> */}
    <br /><br /><br /><br /><br /><br /><br />
   <Banner banner={banner}  />




        </div>
    )
}

export default Root_section_3
