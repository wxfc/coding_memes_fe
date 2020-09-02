import React from 'react'
import axios from 'axios'

export default class Login extends React.Component {

  state = {
    email: "",
    password: ""
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

  handleLogin = (e) => {
    e.preventDefault()
    let {email, password} = this.state
    axios
      .post('http://localhost:4567/session', {
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
          <h2>Login</h2>
          <label htmlFor="">Email</label>
          <input type="text" name="email" onChange={this.handleEmail}/>
          <label htmlFor="">Password</label>
          <input type="text" name="password" onChange={this.handlePassword}/>
          <p><button onClick={this.handleLogin}>Login</button></p>
        </form>
      </div>
    )
  }
}
