import React from 'react'
import Nav from '../components/Nav'
import UsersList from '../components/UsersList'
import Loading from '../components/Loading'

class Users extends React.Component {

    state = {
        data: '',
        loading: true,
        error: null,
    }

    componentDidMount = async () => (
        await this.fetchData()
    )

    fetchData = async () => {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/users')
            let data = await res.json()

            this.setState({
                data,
                loading: false
            })
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    handleClick = (e) => {
        console.log("hola")
    }

    render() {
        if (this.state.loading) {
            return <Loading />
        }
        return (
            <div>
                <Nav />
                <div className="container-fluid">
                    <UsersList users={this.state.data} />
                </div>
            </div>
        )
    }
}

export default Users