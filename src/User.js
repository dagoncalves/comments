import React from 'react';

const User = props => {
  const { email } = props;
  return (
    <div>
      Logado como: {email}
      <button onClick={props.logout}>Sair</button>
    </div>
  );
};

export default User;
