import React from 'react';

const Comment = ( { comment } ) => {
  let comentario = '';
  let email = '';

  if ( comment ) {
    if ( comment.comment ) {
      comentario = comment.comment;
    }
    if ( comment.email ) {
      email = comment.email;
    }
  }

  return (
    <div>
      Comentário: {comentario}
      <br />
      Enviado por: {email} <hr />
    </div>
  );
};

export default Comment;
