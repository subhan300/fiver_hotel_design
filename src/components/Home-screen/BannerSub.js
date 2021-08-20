import React from 'react'
import '../../styles/Home-comp-styles/BannerSub.css'
import vector from '../../assets/images/Vector.png'

import subBanner from '../../assets/images/IMG_5334 1.png'
import bottomImage from '../../assets/images/IMG_6118 1.png'


function BannerSub(props) {
    return (
        <>
        <div className={`section ${props.cname}`}>
            <div className="sectionBx">
                <div className="section_leftBx">
                    <img src={subBanner} alt="" />
                </div>
                <div className="section_rightBx">
                    <div>
                        <h1>
                            Cucina Verace - <br/>
                            True Italian Cuisine
                        </h1>
                        <p>
                            La Stella represents more than just a restaurant concept.
                            It is an immersive and truly authentic - verace - Italian
                            dining experience comprised of immense passion and creativity.
                        </p>
                    </div>
                </div>
            </div>
            <div className="section_bottom">
                <h1>La Stella - The Star amongst stars</h1>
                <p>
                    Our name represents a promise to ourselves and to 
                    our customers.  We set the benchmark for the finest 
                    Italian dining experience in North Texas.
                </p>
            </div>
            <div className="vector">
                <img src={vector} alt="" />
            </div>
        </div>
        <div className="bottom_image">
            <img src={bottomImage} alt="" />
        </div>
        </>
    )
}

export default BannerSub
