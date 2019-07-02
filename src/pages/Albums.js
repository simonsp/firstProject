import React from 'react'
import Nav from '../components/Nav'
import Loading from '../components/Loading'
import AlbumsList from '../components/AlbumsList'

class Albums extends React.Component {
    state = {
        data: '',
        users: '',
        error: null,
        loading: true,
    }

    componentDidMount = async () => {
        this.fetchData()
    }


    fetchData = async () => {
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/albums`)
            let data = await res.json()
            let restwo = await fetch(`https://jsonplaceholder.typicode.com/users`)
            let users = await restwo.json()
            this.setState({
                data,
                users,
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
                    <AlbumsList albums={this.state.data} users={this.state.users} />
                </div>
            </div>
        )
    }

}

export default Albums