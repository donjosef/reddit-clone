import React from 'react'
import './PostForm.css'

const PostForm = ({ activePost, mode, isOpen, onOpenForm, onCloseForm, onCreatePost, onUpdatePost }) => {

    const handleSubmitPost = (e) => {
        e.preventDefault()

        if (mode === 'create') {
            if (e.target.title.value && (e.target.description.value || e.target.url.value)) {
                onCreatePost({
                    title: e.target.title.value,
                    description: e.target.description.value,
                    url: e.target.url.value
                })
                e.target.reset()
            }
        }

        if (mode === 'update') {
            onUpdatePost({
                title: e.target.title.value,
                description: e.target.description.value,
                url: e.target.url.value
            })
        }
    }

    return (
        <>
            <button className="btn btn-outline-primary" onClick={onOpenForm}>Toggle form</button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div
                                className="modal-header"
                                style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button
                                    type="button"
                                    onClick={onCloseForm}
                                    className="btn btn-outline-primary"
                                    aria-label="Close">
                                    X
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmitPost} className="mt-3">
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input
                                            id="title"
                                            name="title"
                                            required
                                            type="text"
                                            defaultValue={activePost.title}
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            rows="4"
                                            defaultValue={activePost.description}
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="url">URL</label>
                                        <input
                                            id="url"
                                            name="url"
                                            type="url"
                                            defaultValue={activePost.url}
                                            className="form-control"
                                        />
                                    </div>
                                    <button className="btn btn-info">{mode.toUpperCase()}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PostForm
