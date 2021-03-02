// File: SearchBar.js
// Programmer: Daniel Grew
// Description: search bar component

import React from 'react'
import './SearchBar.css'

export default function SearchBar({placeholder, value}) {

    const {SearchValue, setSearchValue} = value;
    
    // On change event for the Search input
    function searchChanged(event) {
        setSearchValue(event.target.value)
    }

    return (
        <div className='searchbar'>
            <input type='text' name='searchInput' placeholder={placeholder} className='searchInput' value={SearchValue} onChange={searchChanged}></input>
            <button type='submit' className='submit-btn'>Search</button>
        </div>
    )
}
