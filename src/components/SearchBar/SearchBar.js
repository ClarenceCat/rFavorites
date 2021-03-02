// File: SearchBar.js
// Programmer: Daniel Grew
// Description: search bar component

import React from 'react'
import './SearchBar.css'

export default function SearchBar({placeholder}) {
    return (
        <div className='searchbar'>
            <input type='text' name='searchInput' placeholder={placeholder} className='searchInput' ></input>
            <button type='submit' className='submit-btn'>Search</button>
        </div>
    )
}
