import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    passwd: ''
  };

  handleChange = field => e => {
    this.setState({
      [field]: e.target.value
    });
  };

  login = () => {
    this.props.login(this.state.email, this.state.passwd);
  };

  render() {
    return (
      <div>
        <h4>Login</h4>
        <input
          type="text"
          onChange={this.handleChange('email')}
          placeholder="E-mail"
        />
        <input
          type="password"
          onChange={this.handleChange('passwd')}
          placeholder="Senha"
        />
        <button type="button" onClick={this.login}>
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
