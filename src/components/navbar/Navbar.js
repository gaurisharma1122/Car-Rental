import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../images/car-logo.png"
import { navLinks } from '../../data'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [navOpen, setNavOpen]= useState(false);

    
    return (
        <nav>
            <div className="nav-container">

                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="toggle">
                    <i className={navOpen?"fa-solid fa-circle-xmark":"fa-solid fa-bars"} onClick={()=> setNavOpen(!navOpen)}></i>
                </div>

                <div className={navOpen?'navlinks nav-active':'navlinks'}>
                    {
                        navLinks.map((item) => {
                            return <Link key={item.id} to={item.url}>
                                {item.title}
                            </Link>
                        })
                    }
                </div>

                <div className="buttons">
                    <button className='btn-black'>Sign In</button>
                    <button className='btn-orange'>Register</button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
