import React, { useState, useEffect } from 'react'
import CreatePostForm from '../CreatePostForm'
import { useParams } from 'react-router-dom'
import { useSelector, useStore } from 'react-redux'
import db from '../../db'
import firebase from '../../firebase'

import './Subreddit.css'

const isImage = (url) => {
    const indexOfQuestionMark = url.indexOf('?')
    if (indexOfQuestionMark !== -1) {
        const spliced = url.substring(0, indexOfQuestionMark)
        return new RegExp(/(png|jpg|jpeg|gif)$/).test(spliced)
    }

    return new RegExp(/(png|jpg|jpeg|gif)$/).test(url)
}

const Subreddit = ({ user }) => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState({})
    const params = useParams()
    const subreddit = useSelector(state => state.subreddits.find(subreddit => subreddit.name === params.name))

    useEffect(() => {
        if (subreddit) {
            const unsubsrcibe = db
                .collection('posts')
                .where('subreddit_id', '==', subreddit.id)
                .onSnapshot(snapshot => {
                    const posts = []
                    snapshot.forEach(doc => {
                        posts.push({
                            ...doc.data(),
                            id: doc.id
                        })
                    })
                    setPosts(posts)
                })

            return () => {
                unsubsrcibe()
            }
        }
    }, [subreddit])

    useEffect(async () => {
        if (posts.length) {
            const userIds = [...new Set(posts.map(post => post.user_id))]
            let users = {}
            for (let userId of userIds) {
                const user = await db.collection('users').doc(userId).get() 
                users[userId] = user.data()
            }

            setUsers(users)
        }
    }, [posts])

    const handleCreatePost = async (formValues) => {
        const post = {
            title: formValues.title,
            description: formValues.description,
            url: formValues.url,
            user_id: user.id,
            subreddit_id: subreddit.id,
            created_at: firebase.firestore.FieldValue.serverTimestamp(),
            updated_at: firebase.firestore.FieldValue.serverTimestamp()
        }
        await db.collection('posts').add(post)
    }
console.log('users object: ', users)
    return (
        <div>
            <h2 className="text-muted mb-5">{params.name.toUpperCase()}</h2>
            {user ? (
                <CreatePostForm onCreatePost={handleCreatePost} />
            ) : (
                    <span className="text-muted">Please log in to create a post</span>
                )}

            <section className="mt-5">
                {posts.map((post, ind) => (
                    <div key={post.id} className="card mb-3">
                        <div className="card__flex g-0">
                            <div className="card__col-left">^</div>
                            <div className="card__col-right">
                                <div className="card-body pt-1">
                                    <img className="userImg" src={users[post.user_id] ? users[post.user_id].image : ''}/>
                                    <span className="card__user">
                                        Posted by {users[post.user_id] ? users[post.user_id].name : ''}
                                    </span>
                                    <span className="card__date">{post.created_at.toDate().toLocaleString()}</span>
                                    <h5 className="card-title mt-2">{post.title}</h5>
                                    <p className="card-text">{post.description}</p>
                                    {(post.url && isImage(post.url)) && <img src={post.url} />}
                                    {post.url && !isImage(post.url) && <a href={post.url} target="_blank">{post.url}</a>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Subreddit
