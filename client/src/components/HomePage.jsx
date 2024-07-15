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
    const [userInfo, setUserInfo] = useState(user);
    const [tokenInfo, setTokenInfo] = useState(token);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user])

    useEffect(() => {
        setUserInfo(user);
        setTokenInfo(token);
    }, [user, token])

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser("");
        setUserInfo("");
        setTokenInfo("");
    }

    return(
        <>
        <div className="serverCallContainer">
            <div className="validServerCallContainer">
                <section className='serverCallDescription'>
                    The left button will make a request to the server for the username. The request will include a valid JSON webtoken associated with 
                    the current user. The server will validate the token before responding with the requested data, which will be displayed 
                    beneath the button.
                </section>
                <button onClick={() => setDisplayUserDetails(!displayUserDetails)}>
                    {displayUserDetails ? "Hide username" : "Get username from server!"}
                </button>
                {displayUserDetails && userInfo ? <UserDetails token={tokenInfo} userId={userInfo._id}/>  : <></>}
            </div>
            <div className="invalidServerCallContainer">
                <section className='serverCallDescription'>
                    The right button will make a request to the server for the username. 
                    The request will NOT include a valid JSON webtoken.
                    Therefore, the server will respond with an error, which will be displayed
                    beneath the button.
                </section>
                <button onClick={() => setDisplayServerError(!displayServerError)}>
                    {displayServerError ? "Hide Server Error" : "Try to get username from server without valid access!"}
                </button>
                {displayServerError && userInfo ? <UserDetails token={token + "a"} userId={userInfo._id}/> :<></>}
            </div>
        </div>
        <button className="logout"onClick={() => handleLogout()}>Log Out</button>
        </>
    )
}

export default HomePage;