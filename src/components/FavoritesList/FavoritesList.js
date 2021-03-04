import React, {useState, useEffect} from 'react'
import PostItem from '../PostItem/PostItem'

export default function FavoritesList({posts, setPosts}) {

    const [SavedPosts, setSavedPosts] = useState(null)

    useEffect( () => {
        async function setSaves() {
            const storageData = await localStorage.getItem('likedPosts')
            storageData ? setSavedPosts(JSON.parse(storageData)) : setSavedPosts([])
        }

        setSaves();
    }, [SavedPosts])

    function unlikeClick(post) {
        // remove the post id from list in localStorage
        let stored = SavedPosts;
        let indexToRemove = stored.findIndex(element => element === post.id)

        stored.splice(indexToRemove, 1);
        localStorage.setItem('likedPosts', stored);
        setSavedPosts(stored);

        // remove the post from post list passed down
        let savedPosts = posts;
        indexToRemove = savedPosts.findIndex(element => element.id === post.id);

        savedPosts.splice(indexToRemove, 1);

        setPosts(savedPosts);
    }

    return (
        <div>
            {posts.map((post, index) => {
                return <PostItem key={index} post={post} savedPosts={SavedPosts} likeClick={unlikeClick}/>
            })}
        </div>
    )
}
