import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    email: '',
    passwd: ''
  };

  handleChange = field => e => {
    this.setState({
      [field]: e.target.value
    });
  };

  createAccount = () => {
    this.props.createAccount(this.state.email, this.state.passwd);
  };

  render() {
    const errorMessages = {
      'auth/email-already-in-use': 'E-mail já foi utilizado',
      'auth/weak-password': 'Senha muito fraca',
      'auth/invalid-email': 'E-mail inválido'
    };

    return (
      <div>
        <h4>Criar conta</h4>
        <form className="form-inline">
          <input
            type="text"
            onChange={this.handleChange('email')}
            placeholder="E-mail"
            className="form-control"
          />
          <input
            type="password"
            onChange={this.handleChange('passwd')}
            placeholder="Senha"
            className="form-control"
          />
          <button
            type="button"
            onClick={this.createAccount}
            className="btn btn-primary"
          >
            Criar conta
          </button>
          <button
            onClick={() => this.props.changeScreen('login')}
            className="btn"
          >
            Já tenho conta
          </button>
        </form>
        {this.props.isSignUpError && (
          <div className="card text-white bg-danger mt-3">
            <div className="card-header">Erro ao criar conta</div>
            <div className="card-body">
              <b>Erro:</b> {errorMessages[this.props.signUpError]}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SignUp;
