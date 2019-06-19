import React from 'react';

const Comment = ( { comment } ) => {
  let comentario = '';
  if ( comment && comment.comment ) {
    comentario = comment.comment;
  }
  return <div>{comentario}</div>;
};

export default Comment;
