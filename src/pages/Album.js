import React from 'react'
import Nav from '../components/Nav'
import Loading from '../components/Loading'
import PhotoCard from '../components/PhotoCard.js'

class Album extends React.Component {
    state = {
        data: '',
        loading: true,
        error: null,
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params
        this.fetchData(id)
    }

    fetchData = async (id) => {
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
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
                    <PhotoCard photos={this.state.data} />
                </div>
            </div>
        )
    }
}

export default Album