// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', loginSuccess: true, statusMessage: ''}

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  usernameChange = event => {
    this.setState({username: event.target.value})
  }

  onSuccessfulLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userData = {
      username,
      password,
    }

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.setState({
        username: '',
        password: '',
        loginSuccess: true,
        statusMessage: data.error_msg,
      })
      this.onSuccessfulLogin()
    } else {
      this.setState({loginSuccess: false, statusMessage: data.error_msg})
    }
  }

  render() {
    const {username, password, loginSuccess, statusMessage} = this.state

    return (
      <div className="loginMainPage">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="loginPageImage"
        />
        <form className="loginDetailsForm" onSubmit={this.onSubmitLogin}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="loginFormLogo"
            alt="website logo"
          />
          <br />
          <label htmlFor="usernameInputEl" className="label">
            USERNAME
          </label>
          <br />
          <input
            type="text"
            className="usernameInputEl"
            placeholder="Username"
            id="usernameInputEl"
            value={username}
            onChange={this.usernameChange}
          />
          <br />
          <label htmlFor="passwordInputEl" className="label">
            PASSWORD
          </label>
          <br />
          <input
            type="password"
            className="passwordInputEl"
            placeholder="Password"
            id="passwordInputEl"
            value={password}
            onChange={this.passwordChange}
          />
          <div className="buttonContainer">
            <button type="submit" className="loginButton">
              Login
            </button>
          </div>
          {!loginSuccess ? (
            <p className="loginStatusText">{statusMessage}</p>
          ) : null}
        </form>
      </div>
    )
  }
}

export default LoginForm
