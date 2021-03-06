import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from './NewComment';
import Login from './Login';
import SignUp from './SignUp';
import User from './User';
import 'bootstrap-css-only';

class App extends Component {
  state = {
    comments: [],
    isLoading: false,
    isAuth: false,
    isAuthError: false,
    authError: '',
    isSignUpError: false,
    signUpError: '',
    user: {},
    userScreen: 'login' //signup
  };

  sendComment = comment => {
    const { database } = this.props;

    const id = database
      .ref()
      .child('comments')
      .push().key;

    const comments = {};

    comments['comments/' + id] = {
      comment,
      email: this.state.user.email,
      userId: this.state.user.uid
    };
    database.ref().update(comments);
  };

  login = async (email, passwd) => {
    const { auth } = this.props;
    this.setState({
      authError: '',
      isAuthError: false
    });

    try {
      await auth.signInWithEmailAndPassword(email, passwd);
      console.log('logar', email, passwd);
    } catch (err) {
      console.log(err);
      this.setState({
        authError: err.code,
        isAuthError: true
      });
    }
  };

  createAccount = async (email, passwd) => {
    const { auth } = this.props;
    this.setState({
      signUpError: '',
      isSignUpError: false
    });

    try {
      await auth.createUserWithEmailAndPassword(email, passwd);
      console.log('logar', email, passwd);
    } catch (err) {
      console.log(err);
      this.setState({
        signUpError: err.code,
        isSignUpError: true
      });
    }
  };

  logout = () => {
    const { auth } = this.props;
    auth.signOut();
  };

  changeScreen = screen => {
    this.setState({
      userScreen: screen
    });
  };

  componentDidMount() {
    const { database, auth } = this.props;

    this.setState({ isLoading: true });
    this.comments = database.ref('comments');

    this.comments.on('value', snapshot => {
      this.setState({
        comments: snapshot.val(),
        isLoading: false
      });
    });

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isAuth: true,
          user
        });
      } else {
        this.setState({
          isAuth: false,
          user: {}
        });
      }
    });
  }

  render() {
    const { isAuth, isLoading, userScreen } = this.state;
    return (
      <div className="container mt-3">
        {isAuth && <User email={this.state.user.email} logout={this.logout} />}
        {!isAuth && userScreen === 'login' && (
          <Login
            login={this.login}
            isAuthError={this.state.isAuthError}
            authError={this.state.authError}
            changeScreen={this.changeScreen}
          />
        )}
        {!isAuth && userScreen === 'signup' && (
          <SignUp
            createAccount={this.createAccount}
            isSignUpError={this.state.isSignUpError}
            signUpError={this.state.signUpError}
            changeScreen={this.changeScreen}
          />
        )}
        {isAuth && <NewComment sendComment={this.sendComment} />}
        {isLoading && <p>Carregando...</p>}
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
