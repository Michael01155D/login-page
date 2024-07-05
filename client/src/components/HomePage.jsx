import '../styles/homePage.css';

const HomePage = ({ user, setUser }) => {
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