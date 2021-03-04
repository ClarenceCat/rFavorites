// File: PostList.js
// Programmer: Daniel Grew
// Description: List of Posts

import React, {useEffect, useState} from 'react'
import './PostList.css'
import PostItem from '../PostItem/PostItem'

export default function PostList({posts}) {
    const [SavedPosts, setSavedPosts] = useState(null)

    useEffect( () => {
        let isMounted = true

        async function setSaves() {
            const storageData = await localStorage.getItem('likedPosts')
            if(isMounted){
                storageData ? setSavedPosts(JSON.parse(storageData)) : setSavedPosts([])
            }
        }

        setSaves();

        return(() => {
            isMounted = false;
        })
    }, [SavedPosts])

    function likeClick(post_id){
        // check current list for saved data
        let data = SavedPosts;

        // check if the user has already liked a post -> if yes then remove from list, else add to list
        // data.find(selectedPost => selectedPost === post_id) ? (data.pop(post_id)) : data.push(post_id)

        if(data.find(selectedPost => selectedPost === post_id)){
            let index = data.findIndex(element => element === post_id);
            data.splice(index, 1);
        } else{
            data.push(post_id);
        }

        // add array to localStorage
        localStorage.setItem('likedPosts', JSON.stringify(data))

        // update SavedPosts
        setSavedPosts(data)
    }
    return (
        <div className='post-list'>
            {posts.map((post, index) => {
                return <PostItem key={index} post={post} savedPosts={SavedPosts} likeClick={likeClick}/>
            })}
        </div>
    )
}
