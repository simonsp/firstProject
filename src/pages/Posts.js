import React from 'react'
import Nav from '../components/Nav'
import PostsList from '../components/PostsList'
import Loading from '../components/Loading'


class Posts extends React.Component {

    state = {
        data: '',
        error: null,
        loading: true,
    }

    componentDidMount = async () => {
        this.fetchData()
    }


    fetchData = async () => {
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
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
                    <PostsList posts={this.state.data} />
                </div>
            </div>
        )
    }


}

export default Posts