import React from 'react';

function Logout() {
  sessionStorage.clear();
  
 

  
  return (
    <div>
      <h2>Logout</h2>
      <p>Welcome to the Logout page!</p>
    </div>
  );
}

export default Logout;