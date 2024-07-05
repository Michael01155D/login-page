import { useState } from "react";
import NotificationMessage from './NotificationMessage';
import LoginForm from './LoginForm';
import '../styles/loginPage.css';
import { Link } from "react-router-dom";

const LoginPage = ({ sendLoginRequest, notification, isError}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        await sendLoginRequest(username, password);
        setPassword("");
    }

    return (
        <>
        {notification ? <NotificationMessage notification={notification} isError={isError} /> : <></>}
        <LoginForm sendLoginRequest={sendLoginRequest}/>
        <Link to="/register"> New User? Register Here! </Link>
        </>
    )
}

export default LoginPage;