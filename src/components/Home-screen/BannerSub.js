import React from 'react'
import '../../styles/Home-comp-styles/BannerSub.css'
import vector from '../../assets/images/Vector.png'

import subBanner from '../../assets/images/IMG_5334 1.png'
import bottomImage from '../../assets/images/IMG_6118 1.png'


function BannerSub(props) {
    // const text = props.mainh1;
    // const newText = text.split('\n').map(str => <h1>{str}</h1>)
    return (
        <>
        <div className="section">
            <div className={`sectionBx ${props.cname}`}>
                <div className="section_leftBx">
                    <img src={props.banner} alt="" />
                </div>
                <div className={`section_rightBx`}>
                    <div>
                        <h1 >
                            {props.mainh1}
                        </h1>
                        <p>
                            {props.para}
                        </p>
                        {props.childComponent}
                    </div>
                </div>
            </div>
            <div className="section_bottom">
                <h1> {props.secBottomh1} </h1>
                <p>
                    {props.secBottomText}
                </p>
            </div>
            <div className="vector">
                <img src={vector} alt="" />
            </div>
        </div>
        <div className="bottom_image">
            <img src={props.lowerImage} alt="" />
        </div>
        </>
    )
}

export default BannerSub
