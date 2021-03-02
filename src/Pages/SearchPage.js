import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import './Pages.css'

export default function SearchPage() {
    return (
        <div className='page'>
            <h1>Search</h1>
            <div className='search'>
                <form className='searchform' onSubmit={(event) => { event.preventDefault(); }}>
                    <SearchBar placeholder='e.g. memes' />
                </form>
            </div>
        </div>
    )
}
