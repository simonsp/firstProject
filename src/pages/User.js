import React from 'react'
import Nav from '../components/Nav'
import UserCard from '../components/UserCard'
import Loading from '../components/Loading'


class User extends React.Component {

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
            let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
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
                    <UserCard user={this.state.data} />
                </div>
            </div>
        )
    }


}

export default User