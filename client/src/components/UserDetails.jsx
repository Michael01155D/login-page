import { useEffect, useState } from "react";
import { getUserDetails } from "../connections/userService";
import '../styles/userDetails.css';

const UserDetails = ({userId}) => {
    const [userInfo, setUserInfo] = useState(null);
    const [displayError, setDisplayError] = useState(false);
    useEffect(() => {
        getUserDetails(userId).then( res => {
            if (res.error) {
                setDisplayError(true);
                setUserInfo("Error: " + res.error);
            } else {
                setDisplayError(false);
                setUserInfo(res);
            }
        })
    }, [])
    return (
        <div className={displayError ? "userDisplayError" : "userDisplay"}>
            { userInfo ? userInfo : "...loading"}
        </div>
    )
}

export default UserDetails;