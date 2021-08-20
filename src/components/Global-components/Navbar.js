import React from 'react'
import '../../styles/Global-comp-styles/Navbar.css'

// logo
import logo from '../../assets/images/Logo Black text.png'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav__links">
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
        </div>
    )
}

export default Navbar
