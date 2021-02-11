import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../../firebase'
import './Layout.css'

const Layout = ({ user, children }) => {
    const [isNameVisible, setIsNameVisible] = useState(false)

    const logInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider)
    }

    const logOutWithGoogle = async () => {
        await firebase.auth().signOut()
    }

    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">Reddit clone</Link>
                {!user && (
                    <button onClick={logInWithGoogle} className="btn btn-secondary my-2 my-sm-0">Login with Google</button>
                )}
                {user && (
                    <section className="menu">
                        <div className="menu__user-details">
                            <img
                                src={user.image}
                                referrerPolicy="no-referrer"
                                onMouseOver={() => setIsNameVisible(true)}
                                onMouseLeave={() => setIsNameVisible(false)} />
                            {isNameVisible && (
                                <div className="menu__tooltip">
                                    <span className="arrow"></span>
                                    {user.name}
                                </div>
                            )}
                        </div>
                        <button
                            onClick={logOutWithGoogle}
                            className="btn btn-secondary my-2 my-sm-0">
                            Logout
                        </button>
                    </section>
                )}
            </nav >
            <main className="container mt-3">
                {children}
            </main>
        </div>
    )
}

export default Layout