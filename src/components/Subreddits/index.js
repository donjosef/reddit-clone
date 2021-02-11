import React from 'react'
import { Link } from 'react-router-dom'

const Subreddits = (props) => {
    return (
        <div>
            <h2 className="text-muted mb-5">Subreddits</h2>
            <ul className="list-group">
                {props.subreddits.map(subreddit => (
                    <Link className="text-info" key={subreddit.id} to={`/r/${subreddit.name}`}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            {subreddit.name}
                            <span></span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Subreddits
