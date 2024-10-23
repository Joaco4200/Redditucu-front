import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./SearchBar";
import CreateNewPost from "./CreateNewPost";

const Header = () => {

    return(
        <div className="d-flex justify-content-between alig-items-center p-3 bg-dark" style={{Width: '100px', height: '100px' }}>

            <img src= "/logoucu.png" alt= "logo" className= "img-fluid"/>
            
            <SearchBar/>

            <CreateNewPost/>
        
        </div>
    )
};

export default Header;