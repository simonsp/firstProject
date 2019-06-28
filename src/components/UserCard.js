import React from 'react'
import { Link } from 'react-router-dom'
//<td>{user.company ? user.company.name : 'Sin nombre'}</td>
const UserCard = ({ user }) => (

    <div className="card mt-5">
        <h5 className="card-header">{user.name}</h5>
        <div className="card-body">
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="row">User Name</th>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <th scope="row">E-mail</th>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <th scope="row">Address</th>
                        <td>{user.address.street} {user.address.suite}, {user.address.city}</td>
                    </tr>
                    <tr>
                        <th scope="row">Phone</th>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <th scope="row">Web Site</th>
                        <td>{user.website}</td>
                    </tr>
                    <tr>
                        <th scope="row">Company Name / Details</th>
                        <td>{user.company.name} / {user.company.bs}</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/users" className="btn btn-primary">Volver</Link>
        </div>
    </div>
)

export default UserCard