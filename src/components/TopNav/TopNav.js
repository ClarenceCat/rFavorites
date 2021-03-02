// File: TopNav.js
// Programmer: Daniel Grew
// Description: This file contains the top nav used for this app

import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './TopNav.css'

export default function TopNav() {
    const location = useLocation();
    return (
        <div className='top-nav'>
            <div className='nav-logo'>
                
                <span>r/</span>Favorites
                
            </div>
            <nav>
                <ul className='nav-links'>
                    <li><Link to='/' className={(location.pathname === '/') ? 'active': ''}>r/Search</Link></li>
                    <li><Link to='/favorites' className={(location.pathname === '/favorites') ? 'active': ''}>r/Saved</Link></li>
                </ul>
            </nav>
        </div>
    )
}
