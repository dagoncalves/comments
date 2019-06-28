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
    <div className="card mt-2">
      <div className="card-body">
        {comentario}
        <br />
        <span className="text-muted">Enviado por: {email}</span>
      </div>
    </div>
  );
};

export default Comment;
