import React from 'react'
import { Link } from 'react-router-dom'

class TodosUserList extends React.Component {
    render() {
        const { todos } = this.props
        return (
            <div className="container mb-2">
                <h1 className="display-4">To Do List</h1>
                <ul class="list-group mb-2">
                    {
                        todos.map((todo) =>
                            <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {todo.title}
                                <div class="form-check disabled">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" id="exampleCheckbox1" defaultChecked={todo.completed} disabled></input>
                                        Status
</label>
                                </div>
                            </li>
                        )
                    }
                </ul>
                <Link to="/users" className="btn btn-primary">Volver</Link>
            </div>
        )
    }
}

export default TodosUserList   