import React, { useEffect, useState } from 'react'
import PostList from '../components/PostList/PostList';

export default function FavoritesPage() {

    const [Posts, setPosts] = useState(null)
    const [Error, setError] = useState(null)

    useEffect(() => {
        let isMounted = true;

        function getList(){

            // get the list from localStorage
            const savedPosts = JSON.parse(localStorage.getItem('likedPosts'));
            let post_list = [];

            // if its null then return (no saved posts)
            if(!savedPosts){
                return;
            }
            // loop through array and call reddit api, adding the response to the post list
            savedPosts.forEach(post_id => {
                fetch('https://www.reddit.com/comments/' + post_id + '/.json')
                .then(res => res.json())
                .then(data => {
                    if(isMounted)
                    {
                        const post = data[0].data.children.map(data => data.data);
                        post_list.push(post[0]);
                    }
                })
                .catch(err => {
                    setError('Error retrieving posts')
                    console.log(err);
                    post_list = [];
                });
            });

            if(post_list !== [])
            {
                setPosts(post_list);
            }
        }

        getList();

        return () => { 
            setPosts(null);
            isMounted = false; 
        };

    }, [])

    return (
        <div className="page">
            <h1>Favorites</h1>
            <div className='result-list'>
            {Error !== null ? (
                <div>{Error}</div>
            ) : (
                <div>{Posts === null ? <p>There are no favorites</p> : <PostList posts={Posts} /> }</div>
            )}
            </div>
        </div>
    )
}
