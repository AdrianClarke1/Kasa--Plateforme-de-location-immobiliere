import React from 'react';
import {Link, useLocation} from "react-router-dom"

import logo from "../../assets/LOGO.svg"
import "./header.css"


function Header() {

    // condition qui ajoute active sur le bon lien
    const location = useLocation()

    return (
        <header>
            <Link to="/">
            <img src={logo} alt="Logo Kasa"></img>
            </Link>
            <nav>
                <ul className='navBar'>
                    <Link to="/">
                        <li className={location.pathname === '/' ? 'active navLink' : 'navLink'}
                        id="acceuil">Accueil</li>
                    </Link>
                    <Link to="/about">
                        <li className={location.pathname === '/about' ? 'active navLink' : 'navLink'}
                        id="aPropos">A Propos</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header