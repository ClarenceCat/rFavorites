// File: PostList.js
// Programmer: Daniel Grew
// Description: List of Posts

import React from 'react'

export default function PostList({posts}) {
    return (
        <div className='post-list'>
            {posts.map((post, index) => {
                return <p key={index}>{post.title}</p>
            })}
        </div>
    )
}
