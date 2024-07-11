import { useState } from 'react';
import '../styles/homePage.css';
import UserDetails from './UserDetails';

const HomePage = ({ user, setUser }) => {
    const [displayUserDetails, setDisplayUserDetails] = useState(false);
    
    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    }
    return(
        <>
        <div className="todo">
            {displayUserDetails ? <UserDetails userId={user._id}/> : <></>}
           <button onClick={() => setDisplayUserDetails(!displayUserDetails)}>{displayUserDetails ? "Hide user details" : "Show user details"}</button>
        </div>
        <button className="logout"onClick={() => handleLogout()}>Log Out</button>
        </>
    )
}

export default HomePage;