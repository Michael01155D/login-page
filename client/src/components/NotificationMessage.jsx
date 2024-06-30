import '../styles/NotificationMessage.css';

const NotificationMessage = ({notification, isError}) => {
    return(
        <div id={isError ? "errorMsg" : "notificationMsg"}>
        {notification}
        </div>
    )
}

export default NotificationMessage;