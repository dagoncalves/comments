import React, { Component } from 'react';

class NewComment extends Component {
  state = {
    comentario: ''
  };

  handleChange = e => {
    this.setState({
      comentario: e.target.value
    });
  };

  sendComment = () => {
    this.props.sendComment(this.state.comentario);
    this.setState({
      comentario: ''
    });
  };

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange} name="comentario">{this.state.comentario}</textarea>
        <button onClick={this.sendComment}>Enviar</button>
      </div>

    );
  }
}

export default NewComment;
