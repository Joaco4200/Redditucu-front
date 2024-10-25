import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "../atoms/SearchBar";
import CreatePostIcon from "../atoms/CreatePostIcon";
import ProfileIcon from "../atoms/ProfileIcon";

const Header = () => {

    return(

        //Container main del header
        <div className="d-flex justify-content-between align-items-center p-3 bg-dark" style={{width: '100vw', height: '4vw' }}> 
            
            <div className="d-flex align-items-center">
                <img src= "/logoucu.png" alt= "logo" style={{width: '5vw', height: '5vw' }}/>
                <txt style={{ fontWeight: 'bold', fontFamily: 'Noto Sans', fontSize: '1.6rem', color: '#ffffff' }}>UCUddit</txt>
            </div>
            
            <SearchBar/>

            <div  className="d-flex align-items-center gap-5 ">
                <CreatePostIcon/>
                <ProfileIcon/>
            </div>
        
        </div>
    )
};

export default Header;