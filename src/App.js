import React, { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css';
const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <Profile userId={user.id} />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
