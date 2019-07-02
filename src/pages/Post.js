import React from 'react'
import Nav from '../components/Nav'
import Loading from '../components/Loading'
import PostCard from '../components/PostCard'

class Post extends React.Component {
    state = {
        data: '',
        userdata: '',
        commentsData: '',
        loading: true,
        error: null,
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params
        this.fetchData(id)
    }

    fetchData = async (id) => {
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            let data = await res.json()
            let restwo = await fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
            let userdata = await restwo.json()
            let resthree = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${data.id}`)
            let commentsData = await resthree.json()

            this.setState({
                data,
                userdata,
                commentsData,
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
                    <PostCard post={this.state.data} user={this.state.userdata} comments={this.state.commentsData} />
                </div>
            </div>
        )
    }
}

export default Post