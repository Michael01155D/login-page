import { useEffect, useState } from "react";
import { getUserDetails } from "../connections/userService";
import '../styles/userDetails.css';

const UserDetails = ({ userId, token }) => {
    const [userInfo, setUserInfo] = useState(localStorage.getItem("user"));
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
        {userInfo && !displayError ? 
            <div className="userDisplay">
                { userInfo.username ? userInfo.username : "" }
            </div>
            : <></>
        }
        {userInfo && displayError ? 
        <div className="userDisplayError">
            {userInfo}
        </div>
        : <></>
        }
        </>

    )
}

export default UserDetails;