
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import { login } from './connections/loginService';
function App() {

  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem('user'));
    console.log('loggedIn is after json parse: ', loggedIn)
    if (loggedIn) {
      setUser(loggedIn.user);
    }
  }, [])
  useEffect(() => {
    if (user !== null) {

      setNotification("Signed in as " + user.username);
      resetNotification();
    }
  }, [user]);

  const resetNotification = () => {
    setTimeout(() => {
      setNotification("");
      setIsError(false);
    }, 3000);
  }

  const sendLoginRequest = async (username, password) => {
    try {
      const response = await login(username, password);
      if (response.authToken) {
        setUser(response.user);
        localStorage.setItem('user', JSON.stringify(response));
        console.log("server response is: ", response)
      } else {
        setNotification(response.error);
        setIsError(true);
        resetNotification();
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        { user ?
        <Route path="/" element={< HomePage user={user}/>}/>
        :
        <Route path="/" element={<LoginPage sendLoginRequest={sendLoginRequest} notification={notification} isError={isError}/>}/>
        }
        </Routes>
    </BrowserRouter>
  )
}

export default App
