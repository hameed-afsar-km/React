function props(props) {
    return (props.isLoggedIn ? <p>Welcome to the page {props.name}</p> : <p>Please Log In To Proceed!</p>);
}


export default props;