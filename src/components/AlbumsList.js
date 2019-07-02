import React from 'react'
import { Link } from 'react-router-dom'

class AlbumsList extends React.Component {
    render() {
        const { albums, users } = this.props
        return (
            <div>
                <h1 className="display-4">User Album's</h1>
                <div class="row">
                    {
                        albums.map((album) =>
                            <div key={album.id} class="col-sm-6">
                                <div class="card mb-2">
                                    <div className="card-header">
                                        {album.title}
                                    </div>
                                    <div class="card-body">
                                        <h5>By <Link className="card-title" to={`/users/${users.find(user => user.id === album.userId).id}`}>{users.find(user => user.id === album.userId).name /* ESTO ME BUSCA POR ID MIENTRAS SE MAPEA*/}</Link></h5>
                                        <p className="card-text">Album con varias fotos.</p>
                                    </div>
                                    <div className="card-footer">
                                        <Link className="btn btn-warning text-center" to={`albums/${album.id}/photos`}>See photos...</Link>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        )

    }
}


export default AlbumsList