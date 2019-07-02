import React from 'react'
import { Link } from 'react-router-dom'

class PostsList extends React.Component {
    render() {
        const { posts } = this.props
        return (
            <div>
                <h1 className="display-4">Users Posts</h1>
                <div className="container mt-2">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map((post) =>
                                    <tr key={post.id}>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                        <td><Link to={`/posts/${post.id}`} className="btn btn-info">Details</Link></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}


export default PostsList