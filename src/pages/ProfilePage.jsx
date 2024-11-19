import React from "react";
import Header from "../components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import HomeButton from "../atoms/HomeButton";

const ProfilePage = () =>{
    const {user,isAuthenticated,isLoading}= useAuth0();

    if (isAuthenticated) {
        return (
            <div>
                <Header/>
                
                <div className="d-flex" style={{ height: '44.5vw' }}>
           
                    <div className="col-2 d-flex flex-column align-items-center justify-content-start border border-secondary border-bottom-0 "> 
                        <a className="mt-5">
                            <HomeButton/>
                        </a>
                    </div>  

                
                    <div className="col-10 d-flex flex-column align-items-center justify-content-start p-4" style={{ marginLeft: '-13rem', marginTop:'9rem' }}>
                        <img src={user.picture} className="mb-5" alt="User" style={{ width: '150px', borderRadius: '50%' }}/>
                        <h2 className="mb-3 border border-secondary rounded p-2">Username: {user.name}</h2>
                        <h2 className="border border-secondary rounded p-2">Email: {user.email}</h2>      
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
