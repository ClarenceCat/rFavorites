import React, {useState} from 'react'
import PostList from '../components/PostList/PostList'
import SearchBar from '../components/SearchBar/SearchBar'
import './Pages.css'

export default function SearchPage() {

    const [SearchValue, setSearchValue] = useState("")
    const [SearchResults, setSearchResults] = useState(null)
    const [Error, setError] = useState(null)


    // onsubmit event - calls reddit api to retrieve searched items
    function onSubmit(event) {
        event.preventDefault();

        // attempt to fetch reddit data
        fetch('http://www.reddit.com/r/' + SearchValue + '/hot.json?limit=9')
        .then(res => res.json())
        .then((data) => {
            const postList = data.data.children.map(data => data.data);
            setSearchResults(postList);
            setError(null)
        })
        .catch(err => {
            setError('Could not find subreddit');
            setSearchResults(null);
            return
        });
    }
    

    return (
        <div className='page'>
            <h1>Search</h1>
            <div className='search'>
                <form className='searchform' onSubmit={onSubmit}>
                    <SearchBar placeholder='e.g. memes' value={{SearchValue, setSearchValue}} />
                </form>
            </div>
            <div className="result-list">
                {Error !== null ? (
                    <div>{Error}</div>
                ) : (
                    <div>{SearchResults === null ? <p>Search a subreddit</p> : <PostList posts={SearchResults} />}</div>
                ) }
                    
            </div>
        </div>
    )
}
