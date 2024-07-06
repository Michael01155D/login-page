
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {

  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem('user'));
    if (loggedIn) {
      setUser(loggedIn.user);
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        { user ?
        <Route path="/" element={< HomePage user={user} setUser={setUser}/>}/>
        :
        <Route path="/" element={<LoginPage setUser={setUser} notification={notification} setNotification={setNotification} setIsError={setIsError} isError={isError}/>}/>
        }
        <Route path="/register" element={<RegisterPage setUser={setUser} notification={notification} setNotification={setNotification} setIsError={setIsError} isError={isError}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
