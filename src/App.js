import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from './NewComment';

class App extends Component {
  state = {
    comments: ['Comment 1', 'Comment 2'],
    comentario: ''
  };

  sendComment = comment => {
    this.setState({
      comments: [...this.state.comments, comment]
    });
  };

  render() {
    return (
      <div>
        <NewComment sendComment={this.sendComment} />
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
