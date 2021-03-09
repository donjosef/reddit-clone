import React, { useState } from 'react'
import './CreatePostForm.css'

const CreatePostForm = ({ mode, isOpen, onToggleForm, onCreatePost }) => {
    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        url: ''
    })

    const handleFormValues = label => ({ target: { value } }) => {
        if (label === 'title') {
            setFormValues({
                ...formValues,
                title: value
            })
        }
        if (label === 'description') {
            setFormValues({
                ...formValues,
                description: value
            })
        }
        if (label === 'url') {
            setFormValues({
                ...formValues,
                url: value
            })
        }
    }

    const handleCreatePost = (e) => {
        e.preventDefault()
        const { title, description, url } = formValues

        if (title && (description || url)) {
            onCreatePost(formValues)
            setFormValues({
                title: '',
                description: '',
                url: '',
            })
        }
    }

    return (
        <>
            <button className="btn btn-outline-primary" onClick={onToggleForm}>Toggle form</button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div 
                                className="modal-header" 
                                style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <button
                                    type="button"
                                    onClick={onToggleForm}
                                    className="btn btn-outline-primary"
                                    aria-label="Close">
                                        X
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleCreatePost} className="mt-3">
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input
                                            id="title"
                                            required
                                            type="text"
                                            value={formValues.title}
                                            onChange={handleFormValues('title')}
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea
                                            id="description"
                                            rows="4"
                                            value={formValues.description}
                                            onChange={handleFormValues('description')}
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="url">URL</label>
                                        <input
                                            id="url"
                                            type="url"
                                            value={formValues.url}
                                            onChange={handleFormValues('url')}
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

export default CreatePostForm
