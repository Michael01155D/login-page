import UserForm from "./UserForm";
import { register } from "../connections/userService";
import { useNavigate, Link } from "react-router-dom";
import NotificationMessage from "./NotificationMessage";
import { login } from "../connections/loginService";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const RegisterPage = ({ notification, setNotification, isError, setIsError, setUser }) => {

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user._id) {
            navigate("/");
        }
    }, [user])

    const sendRegisterRequest = async (username, password) => {
        const newUser = await register(username, password);
        if (newUser._id) {
            const response = await login(username, password);
            localStorage.setItem("user", JSON.stringify(response));
            setUser(response.user);
            navigate("/");
        } else {
            if (newUser.code == 11000) {
                setNotification("The username is already taken.");
            }
            if (newUser.message && newUser.message.includes("Path `username`")){
                setNotification("Username must be between 2 and 20 characters");
            }
            if (newUser.invalidPasswordError){
                setNotification(newUser.invalidPasswordError);
            }
            setIsError(true);
            setTimeout(() => {
                setNotification("");
                setIsError(false);
            }, 5000);
        }
    }

    return(
        <>
        <h2>Create a New User Account</h2>
        {notification ? <NotificationMessage notification={notification} isError={isError}/>: <></>}
        <UserForm requestHandler={sendRegisterRequest} formAction="Register"/>
        <Link to="/login"> Return to Login Page</Link>
        </>
    )
}


export default RegisterPage;