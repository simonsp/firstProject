import React from 'react'

const PhotoCard = ({ photos }) => (
    <div className="container mt-2">
        {
            photos.map((photo =>
                <div className="card-deck d-flex justify-content-center mb-2">
                    <div className="card col-6">
                        <img src={photo.url} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">{photo.title}</h5>
                            <p className="card-text"><small className="text-muted"> 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            ))
        }

    </div>
)

export default PhotoCard