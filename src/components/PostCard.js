import React from 'react'
import { Link } from 'react-router-dom'
const PostCard = ({ post, user }) => (

    <div className="card mt-5">
        <h5 className="card-header">{post.title}</h5>
        <div className="card-body">
            <Link to={`/users/${post.userId}`}><h5 className="card-title">{user.name}</h5></Link>
            <p className="card-text">{post.body}</p>

            <Link to="/posts" className="btn btn-primary">Volver</Link>
        </div>
    </div>

)

export default PostCard