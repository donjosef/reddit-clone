import React, { useState } from 'react'
import './PostCard.css'

const getUserData = user => {
    return user ? user : ''
}

const isImage = (url) => {
    const indexOfQuestionMark = url.indexOf('?')
    if (indexOfQuestionMark !== -1) {
        const spliced = url.substring(0, indexOfQuestionMark)
        return new RegExp(/(png|jpg|jpeg|gif)$/).test(spliced)
    }

    return new RegExp(/(png|jpg|jpeg|gif)$/).test(url)
}

const PostCard = ({ post, onDeletePost, user, users }) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    
    return (
        <div className="card mb-3">
            <div className="card__flex g-0">
                <div className="card__col-left">^</div>
                <div className="card__col-right">
                    <div className="card-body pt-1">
                        <div className="card__header">
                            <img
                                className="userImg"
                                src={getUserData(users[post.user_id]).image} />
                            <span
                                className="card__user">
                                Posted by {getUserData(users[post.user_id]).name}
                            </span>
                            <span
                                className="card__date">
                                {post.created_at ? post.created_at.toDate().toLocaleString() : ''}
                            </span>
                            {user.id === post.user_id && (
                                <button
                                    style={{ padding: 0 }}
                                    className="btn open-popover"
                                    aria-label="popover menu"
                                    onClick={() => setIsPopoverOpen(!isPopoverOpen)}></button>
                            )}
                            {isPopoverOpen && (
                                <div className="card__popover">
                                    <ul>
                                        <li>Update post</li>
                                        <li onClick={() => onDeletePost(post.id)}>Delete Post</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <h5 className="card-title mt-2">{post.title}</h5>
                        <p className="card-text">{post.description}</p>
                        <div>
                            {(post.url && isImage(post.url)) && <img style={{width: '100%'}} src={post.url} />}
                        </div>
                        {post.url && !isImage(post.url) && <a href={post.url} target="_blank">{post.url}</a>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard