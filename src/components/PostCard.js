import React from 'react'
import { Link } from 'react-router-dom'
const PostCard = ({ post, user, comments }) => (

    <div className="card mt-5">
        <h5 className="card-header">{post.title}</h5>
        <div className="card-body">
            <Link to={`/users/${post.userId}`}><h5 className="card-title">{user.name}</h5></Link>
            <p className="card-text">{post.body}</p>
            <blockquote class="blockquote mb-0">
                <p>Comments</p>
                <div class="list-group">
                    {
                        comments.map((comment) =>
                            <a key={comment.id} href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">{comment.name} - By: {comment.email}</h5>
                                    <small>3 days ago</small>
                                </div>
                                <small>{comment.body}</small>
                            </a>
                        )
                    }
                </div>
            </blockquote>
            <Link to="/posts" className="btn btn-primary">Volver</Link>
        </div>
    </div >
)

export default PostCard