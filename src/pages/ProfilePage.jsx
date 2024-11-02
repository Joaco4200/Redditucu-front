import React from "react";
import Header from "../components/Header";
import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage = () =>{
    const {user,isAuthenticated,isLoading}= useAuth0();

    if (isLoading){
        return <div>Loading...</div>
    }

    if (isAuthenticated) {
        return (
            <div>
                <Header/>
                <div className=" d-flex align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
                    <div className="text-center">
                        <img src= {user.picture} className="mb-5"/>
                        <h2 className="mb-5">Username: {user.name}</h2>
                        <h2> Email: {user.email}</h2>
                    </div>        
                </div>
            </div>
        );
    } 

    return (
        <div>
                <Header/>
                <div className=" justify-content-center mt-3">
                    <p> You must be authenticated to view your personal information.</p>
                </div>
        </div>
    )
}

export default ProfilePage;
