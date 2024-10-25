import { useState } from "react";

const ProfileIcon = () =>{

    return (
        <div className="d-flex align-items-center ">

            <txt className="text-light" style= {{fontWeight: 'bold', fontFamily: 'Noto Sans', fontSize: '1.0rem'}}> Joaquin </txt>

            <button className="btn">
                <img src="/profile.png" alt= "Profile image" style= {{width: '3vw', height: '5vh'}}/>
            </button>
            
        </div>  
    )
}

export default ProfileIcon;
