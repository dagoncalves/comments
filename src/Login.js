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
        <h4>Entre para comentar</h4>
        <form className="form-inline">
          <input
            type="text"
            onChange={this.handleChange('email')}
            placeholder="E-mail"
            className="form-control mr-1"
          />
          <input
            type="password"
            onChange={this.handleChange('passwd')}
            placeholder="Senha"
            className="form-control mr-1"
          />
          <button
            type="button"
            onClick={this.login}
            className="btn btn-primary"
          >
            Entrar
          </button>
          <button
            onClick={() => this.props.changeScreen('signup')}
            className="btn"
          >
            Criar conta
          </button>
        </form>
        {this.props.isAuthError && (
          <div className="card text-white bg-danger mt-3">
            <div className="card-header">Erro ao entrar</div>
            <div className="card-body">
              <b>Erro:</b> {errorMessages[this.props.authError]}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
