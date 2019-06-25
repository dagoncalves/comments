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
    const errorMessages = {
      'auth/wrong-password': 'E-mail ou senha inválidos',
      'auth/user-not-found': 'Usuário não encontrado',
      'auth/invalid-email': 'E-mail inválido'
    };

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
        {this.props.isAuthError && (
          <p>
            <b>Erro:</b> {errorMessages[this.props.authError]}
          </p>
        )}
      </div>
    );
  }
}

export default Login;
