import React from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Update from './Update'

export default class Mymemes extends React.Component {

    state = {
        memes: []
    }

    componentDidMount() {
        axios
            .get('http://localhost:4567/my-memes')
            .then((res) => {
                let results = res.data
                this.setState({
                    memes: results
                })
            })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="display-memes">
                    <h2>My Memes</h2>
                    {this.state.memes.map((meme, idx) => (
                        <div key={idx}>
                            <h3>{meme.title}</h3>
                            <img className="meme" src={meme.meme} alt=""/>
                            <Router>
                                <nav>
                                    <Link to="/update">Update</Link>
                                    <Link to="/delete">Delete</Link>
                                </nav>
                                <Switch>
                                    <Route path="/update">
                                        <Update />
                                    </Route>
                                </Switch>
                            </Router>
                        </div>
                    ))}                
                </div>
            </div>
        )
    }
}