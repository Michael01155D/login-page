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
        <div class="todo">
           <p>Todo: add a button that sends an API request in order to verify the user's token is valid</p>
        </div>
        </>
    )
}

export default HomePage;