// File: TopNav.js
// Programmer: Daniel Grew
// Description: This file contains the top nav used for this app

import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './TopNav.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRedditAlien} from '@fortawesome/free-brands-svg-icons'
import {faSearch, faHeart} from '@fortawesome/free-solid-svg-icons'

export default function TopNav() {
    const location = useLocation();
    return (
        <div className='top-nav'>
            <div className='nav-logo'>
            <span className='icon'><FontAwesomeIcon icon={faRedditAlien} color='#000' /></span>
                <span>r/</span>Favorites
                
            </div>
            <nav>
                <ul className='nav-links'>
                    <li><Link to='/' className={(location.pathname === '/') ? 'active': ''}>r/Search <FontAwesomeIcon icon={faSearch} /></Link></li>
                    <li><Link to='/favorites' className={(location.pathname === '/favorites') ? 'active': ''}>r/Saved <FontAwesomeIcon icon={faHeart} /></Link></li>
                </ul>
            </nav>
        </div>
    )
}
