
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { AuthContext } from './contexts/AuthContext';

function App() {

  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('user')));
  const [user, setUser] = useState(auth !== null ? auth.user : "");
  const [token, setToken] = useState(auth !== null ? auth.authToken : "");
  const [notification, setNotification] = useState(null);
  const [isError, setIsError] = useState(false);
  return (
    <BrowserRouter>
    <h1>User Authentication Demo</h1>
      <AuthContext.Provider value={ { user, token } }>
        <Routes>
          <Route path="/" element={< HomePage setUser={setUser}/>}/>
          <Route path="/login" element={
            <LoginPage 
              setUser={setUser} 
              notification={notification} 
              setNotification={setNotification} 
              setIsError={setIsError} 
              isError={isError}
              setToken={setToken}
            />}
          />
          <Route path="/register" element={<RegisterPage setUser={setUser} notification={notification} setNotification={setNotification} setIsError={setIsError} isError={isError}/>} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App
