import React, { useState, useEffect } from 'react'
import PostForm from '../PostForm'
import PostCard from '../PostCard'
import { useParams } from 'react-router-dom'
import { useSelector, useStore } from 'react-redux'
import db from '../../db'
import firebase from '../../firebase'

const Subreddit = ({ user }) => {
    const [posts, setPosts] = useState([])
    const [activePost, setActivePost] = useState({})
    const [users, setUsers] = useState({})
    const [votes, setVotes] = useState({})
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [formMode, setFormMode] = useState('')
    const params = useParams()
    const subreddit = useSelector(state => state.subreddits.find(subreddit => subreddit.name === params.name))

    useEffect(() => {
        if (subreddit) {
            const unsubsrcibe = db
                .collection('posts')
                .where('subreddit_id', '==', subreddit.id)
                .orderBy('created_at', 'desc')
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

    const handleUpdatePost = async (formValues) => {
        const postRef = db.collection('posts').doc(activePost.id)

        await postRef.update({
            ...formValues,
            updated_at: firebase.firestore.FieldValue.serverTimestamp()
        })
    }

    const handleDeletePost = async (postId) => {
        await db.collection('posts').doc(postId).delete()
    }

    const handleVotePost = async (postId, operation) => {
        const votesRef = db.collection('post_votes')
        const doc = await votesRef.doc(postId + user.id).get()

        if (operation == 'add') {
            const vote = {
                user_id: user.id,
                post_id: postId,
                subreddit_id: subreddit.id,
                created_at: firebase.firestore.FieldValue.serverTimestamp()
            }

            if (!doc.exists) {
                await votesRef.doc(postId + user.id).set(vote)
                const snapshot = await db.collection('post_votes').where('post_id', '==', postId).get()

                setVotes({
                    ...votes,
                    [postId]: snapshot.size
                })

            } else {
                return
            }
        }

        if (operation == 'delete') {
            if (!doc.exists) {
                return
            } else {
                await votesRef.doc(postId + user.id).delete()
                //riprendere docs e settare state
                const snapshot = await db.collection('post_votes').where('post_id', '==', postId).get()

                setVotes({
                    ...votes,
                    [postId]: snapshot.size
                })
            }
        }
    }

    const handleOpenForm = (mode, post) => {
        if(mode === 'update') {
            setActivePost(post)
        }
        setFormMode(mode)
        setIsFormOpen(true)
    }

    const handleCloseForm = () => {
        setIsFormOpen(false)
        setActivePost({})
    }

    return (
        <div>
            <h2 className="text-muted mb-5">{params.name.toUpperCase()}</h2>
            {user ? (
                <PostForm 
                    activePost={activePost}
                    mode={formMode}
                    onCreatePost={handleCreatePost} 
                    onUpdatePost={handleUpdatePost} 
                    isOpen={isFormOpen} 
                    onOpenForm={() => handleOpenForm('create')}
                    onCloseForm={handleCloseForm} />
            ) : (
                    <span className="text-muted">Please log in to create a post</span>
                )}

            <section className="mt-5">
                {posts.map((post, ind) => (
                    <PostCard
                        user={user}
                        key={post.id}
                        post={post}
                        vote={votes[post.id]}
                        onDeletePost={handleDeletePost}
                        onVotePost={handleVotePost}
                        users={users}
                        onOpenForm={() => handleOpenForm('update', post)} />
                ))}
            </section>
        </div>
    )
}

export default Subreddit
