import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "../atoms/SearchBar";
import CreatePostIcon from "../atoms/CreatePostIcon";
import ProfileIcon from "../atoms/ProfileIcon";
import LogButton from "../atoms/LogButton";


const Header = () => {

    return(

        //Container main del header
        <div className="d-flex justify-content-between align-items-center p-3 bg-dark" style={{width: '100vw', height: '4vw' }}> 
            
            <button className="btn">
                <div className="d-flex align-items-center">
                    <img src= "/logoucu.png" alt= "logo" style={{width: '5vw', height: '5vw' }}/>
                    <txt style={{ fontWeight: 'bold', fontFamily: 'Noto Sans', fontSize: '1.6rem', color: '#ffffff' }}>UCUDDIT</txt>
                </div>
            </button>
            
            <SearchBar/>

            <div  className="d-flex align-items-center gap-3 ">
                <CreatePostIcon/>
                <LogButton/>
                <ProfileIcon/>
            </div>

        </div>
    )
};

export default Header;