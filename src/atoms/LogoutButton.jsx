import React from "react";
import { useAuth0} from "@auth0/auth0-react";

const LogoutButton = () => {
    const {logout} = useAuth0();

    return(
        <button className="btn btn-outline-light rounded-pill btn-lg" style={{fontWeight: 'bold', fontSize: '1.3rem'}} onClick={() => logout({returnTo: window.location.origin })}> Logout </button>
    )
}

export default LogoutButton;