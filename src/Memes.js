import React from 'react'
import axios from 'axios'

export default class Memes extends React.Component {

    state = {
        memes: []
    }

    componentDidMount() {
        axios
            .get('https://enigmatic-everglades-95667.herokuapp.com/memes')
            .then(res => {
                let results = res.data
                this.setState({
                    memes: results
                })
            })
        
    }

    render() {
        return (
            <div className="wrapper" style={{ textAlign: "center" }}>
                <div className="display-my-memes">
                    <h2>All Memes</h2>
                    {this.state.memes.map((meme, idx) => (
                        <div key={idx}>
                            <h5>{meme.title}</h5>
                            <img src={meme.meme} className="meme" alt=""/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

// https://enigmatic-everglades-95667.herokuapp.com
// http://localhost:4567/memes