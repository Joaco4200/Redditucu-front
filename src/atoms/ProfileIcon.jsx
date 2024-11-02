import { useState } from "react";
import LogButton from "./LogButton";
import { useNavigate } from "react-router-dom";

const ProfileIcon = () =>{

    const navigate= useNavigate();

    const handleClick= () =>{
        navigate('/profile-page')
    }

    return (
        <div className="d-flex align-items-center ">

            <button className="btn" onClick={handleClick}>
                <img src="/profile.png" alt= "Profile image" style= {{width: '3vw', height: '5vh'}}/>
            </button>
            
        </div>  
    )
}

export default ProfileIcon;
