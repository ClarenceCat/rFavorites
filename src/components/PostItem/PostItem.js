// PostItem.js
// Programmer: Daniel Grew
// Description: Item in the post list

import React from 'react'

export default function PostItem({post}) {
    return (
        <div className='post-item'>
            <img src={post.thumbnail} />
            <div className='post-details'>

            </div>
            <button>heart</button>
        </div>
    )
}
