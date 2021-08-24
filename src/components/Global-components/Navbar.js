import React, { useState } from 'react'
import '../../styles/Global-comp-styles/Navbar.css'

// logo
import logo from '../../assets/images/Logo Black text.png'
import toggle from '../../assets/images/Vector22.png'

function Navbar() {

    const [open, setOpen] = useState(false);
    
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav__links nav_menu" 
                style={{ display: open ? "flex" : "flex", left: open ? "0" : "-100%" }}
            >
                <ul>
                    <li>
                        <span>menu</span>
                    </li>
                    <li>
                        <span>roots</span>
                    </li>
                    <li>
                        <span>gallery</span>
                    </li>
                    <li>
                        <span>contact</span>
                    </li>
                </ul>
            </div>
            <div className="nav__buttons">
                <button>order</button>
                <button>reserve</button>
            </div>
            <div className="toggle"
                onClick={() => setOpen(!open)}
            >
                <img src={toggle} alt="" />
            </div>
        </div>
    )
}

export default Navbar
