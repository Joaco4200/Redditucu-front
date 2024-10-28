import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const LogButton = () =>{
    const {isAuthenticated} = useAuth0();

    return (isAuthenticated ? <LogoutButton/> : <LoginButton/>);
    console.log("AAAAAAAAAAAAAAUTENTICADO");

}

export default LogButton;