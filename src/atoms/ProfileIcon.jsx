import { useState } from "react";
import LogButton from "./LogButton";

const ProfileIcon = () =>{

    return (
        <div className="d-flex align-items-center ">

            <button className="btn">
                <img src="/profile.png" alt= "Profile image" style= {{width: '3vw', height: '5vh'}}/>
            </button>
            
        </div>  
    )
}

export default ProfileIcon;
