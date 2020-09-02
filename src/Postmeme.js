import React from 'react'
import axios from 'axios'

export default class Postmeme extends React.Component {

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

    handlePost = (e) => {
        e.preventDefault()
        let {title, meme} = this.state
        axios
            .post('http://localhost:4567/memes', {
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
                    <h2>Post a Meme</h2>
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" onChange={this.handleTitle}/>
                    <label htmlFor="">Meme</label>
                    {/* <input type="file" name="image" onChange={this.handleMeme}/> */}
                    <input type="text" name="image" onChange={this.handleMeme}/>
                    <button onClick={this.handlePost}>Post a Meme</button>
                </form>
            </div>
        )
    }
}