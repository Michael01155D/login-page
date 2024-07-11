import { useEffect, useState } from "react";
import { getUserDetails } from "../connections/userService";

const UserDetails = ({userId}) => {
    const [userInfo, setUserInfo] = useState(null);
    useEffect(() => {
        getUserDetails(userId).then( res => {
            setUserInfo(res);
        })
    }, [])
    return (
        <>
        { userInfo ? userInfo.username : "...loading"}
        </>
    )
}

export default UserDetails;