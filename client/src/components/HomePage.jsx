import { useLocation } from 'react-router-dom';
import '../styles/homePage.css';
import { useEffect } from 'react';

const HomePage = ({ user, setUser }) => {

    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    }
    return(
        <>
        Logged in successfully as {user.username}
        <button className="logout"onClick={() => handleLogout()}>Log Out</button>
        </>
    )
}

export default HomePage;