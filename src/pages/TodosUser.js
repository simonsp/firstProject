import React from 'react'
import Nav from '../components/Nav'
import Loading from '../components/Loading'
import TodosUserList from '../components/TodosUserList'

class TodosUser extends React.Component {
    state = {
        data: {},
        error: null,
        loading: true,
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params //Con esto tomo el parametro de LINK
        this.fetchData(id)
    }


    fetchData = async (id) => {
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
            let data = await res.json()

            this.setState({
                data,
                loading: false,
            })
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    render() {
        if (this.state.loading) {
            return <Loading />
        }
        return (
            <div>
                <Nav />
                <div className="container-fluid">
                    <TodosUserList todos={this.state.data} />
                </div>
            </div>
        )
    }
}

export default TodosUser