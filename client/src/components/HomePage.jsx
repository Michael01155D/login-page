import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/homePage.css';
import UserDetails from './UserDetails';
import { AuthContext } from '../contexts/AuthContext';

const HomePage = ({ setUser }) => {
    const [displayUserDetails, setDisplayUserDetails] = useState(false);
    const [displayServerError, setDisplayServerError] = useState(false);
    const navigate = useNavigate();
    const { user, token } = useContext(AuthContext);
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user])
    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    }
    return(
        <>
        <div className="serverCallToggles">
           <button onClick={() => setDisplayUserDetails(!displayUserDetails)}>
                {displayUserDetails ? "Hide username" : "Get username from the server!"}
            </button>
           {displayUserDetails ? <UserDetails token={token} userId={user._id}/>  : <></>}
           <button onClick={() => setDisplayServerError(!displayServerError)}>
                {displayServerError ? "Hide Server Error" : "Try to get user data from the server without valid access!"}
            </button>
            {displayServerError ? <UserDetails token={token + "a"} userId={user._id}/> :<></>}
        </div>
        <button className="logout"onClick={() => handleLogout()}>Log Out</button>
        </>
    )
}

export default HomePage;