import React from 'react'
import { Link } from 'react-router-dom'

class UsersList extends React.Component {
    render() {
        const { users } = this.props
        return (
            <div>
                <h1 className="display-4">Tabla de usuarios</h1>
                <div className="container mt-2">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">User Name</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">To Do Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) =>
                                    <tr key={user.id}>
                                        <th scope="row" >{user.id}</th>
                                        <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td><Link to={`/users/${user.id}/todos`}>See Todos</Link></td>
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

export default UsersList