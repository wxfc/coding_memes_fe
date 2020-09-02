import React from 'react'
import axios from 'axios'

export default class Signup extends React.Component {

  state = {
    username: "",
    email: "",
    password: "" 
  }

  handleUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleNewUser = (e) => {
    e.preventDefault()
    let {username, email, password} = this.state
    axios
      .post('http://localhost:4567/signup', {
        username,
        email,
        password
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
          <h2>Signup</h2>
          <label htmlFor="">Username</label>
          <input type="text" name="username" onChange={this.handleUsername}/>
          <label htmlFor="">Email</label>
          <input type="text" name="email" onChange={this.handleEmail}/>
          <label htmlFor="">Password</label>
          <input type="password" name="password" onChange={this.handlePassword}/>
          <p><button onClick={this.handleNewUser}>Create Account</button></p>
        </form>
      </div>
    )
  }
}