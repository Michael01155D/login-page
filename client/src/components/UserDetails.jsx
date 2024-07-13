import { useEffect, useState } from "react";
import { getUserDetails } from "../connections/userService";
import '../styles/userDetails.css';

const UserDetails = ({ userId, token }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [displayError, setDisplayError] = useState(false);
    useEffect(() => {
        
        getUserDetails(userId, token).then( res => {

            if (!res.username) {
                const error = res.message ? res.message : "An unknown Error occured";
                setDisplayError(true);
                setUserInfo("Error: " + error);
            } else {
                setDisplayError(false);
                setUserInfo(res);
            }
        })
    }, [])
    return (
        <>
        {userInfo ? 
            <div className={displayError ? "userDisplayError" : "userDisplay"}>
                { userInfo.username ? userInfo.username : userInfo }
            </div>
            : <></>
        }
        </>

    )
}

export default UserDetails;