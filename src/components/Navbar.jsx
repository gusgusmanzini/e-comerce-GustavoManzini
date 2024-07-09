import React, { useState } from 'react';
import "../App.css"

function Navbar () {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <h3>LOGO</h3>
            <nav ref={navRef}>
                <a href="/#">Inicio</a>
                <a href="/#">Sobre Nosotros</a>
                <a href="/#">Contactanos</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;

