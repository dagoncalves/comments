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
        <button type="button" onClick={this.createAccount}>
          Criar conta
        </button>
        {this.props.isSignUpError && (
          <p>
            <b>Erro:</b> {errorMessages[this.props.signUpError]}
          </p>
        )}
        <button onClick={() => this.props.changeScreen('login')}>
          Já tenho conta
        </button>
      </div>
    );
  }
}

export default SignUp;
