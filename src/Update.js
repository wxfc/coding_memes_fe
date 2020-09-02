import React from 'react'
import axios from 'axios'

export default class Update extends React.Component {

    state = {
        title: "",
        meme: ""
    }

    handleTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleMeme = (e) => {
        this.setState({
            meme: e.target.value
        })
    }

    handleUpdate = (e) => {
        e.preventDefault()
        let {title, meme} = this.state
        axios
            .patch('http://localhost:4567/memes', {
                title,
                meme
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
    }

    render() {
        return (
            <div className="wrapper">
                <form action="" method="post">
                    <h2>Update Meme</h2>
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" onChange={this.handleTitle}/>
                    <label htmlFor="">Meme</label>
                    <input type="text" name="image" onChange={this.handleMeme}/>
                    <button onClick={this.handleUpdate}>Update Meme</button>
                </form>
            </div>
        )
    }
}