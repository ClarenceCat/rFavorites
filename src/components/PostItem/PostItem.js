// PostItem.js
// Programmer: Daniel Grew
// Description: Item in the post list

import React, {useEffect, useState} from 'react'
import './PostItem.css'
import {faHeart, faArrowAltCircleUp} from '@fortawesome/free-regular-svg-icons'
import {faHeart as boldHeart} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function PostItem({post, savedPosts, likeClick}) {

    const [ButtonSettings, setButtonSettings] = useState({image: faHeart, color: '#DB7600', buttonStyle: 'add-btn'})

    useEffect(() => {
       if(savedPosts !== null){
        savedPosts.find(exists => exists === post.id) ? setButtonSettings({image: boldHeart, color: '#fff', buttonStyle: 'add-btn-active'}) : setButtonSettings({image: faHeart, color: '#DB7600', buttonStyle: 'add-btn'})
       }
    }, [savedPosts, post.id])

    return (
        <div className='post-item'>
            <div className='post-details'>
                <img alt='reddit thumbnail' src={post.thumbnail} />
                <div>
                    <p className='author'>Author: <b>{post.author}</b></p>
                    <h3 className='title'>{post.title}</h3>
                    <p><FontAwesomeIcon icon={faArrowAltCircleUp} /> {post.ups}</p>
                </div> 
            </div>
            <button className={ButtonSettings.buttonStyle}><FontAwesomeIcon icon={ButtonSettings.image} size='2x' color={ButtonSettings.color} onClick={() => likeClick(post.id)}/></button>
        </div>
    )
}
