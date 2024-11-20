import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HomeButton from "../atoms/HomeButton";
import CreatePost from "../components/CreatePost";


const CreatePostPage = () =>{

    return (
        <div>
            <Header/>
            <div className="d-flex" style={{height: '44.5vw'}}>
                <div className="col-2 d-flex flex-column align-items-center justify-content-start border border-secondary border-bottom-0"> 
                    <a className="mt-5">
                        <HomeButton/>
                    </a>
                </div>
                <div className="col-10 d-flex justify-content-center mt-4" style={{marginLeft:'-12.5rem'}}>
                    <CreatePost/>
                </div>
            </div>
        </div>   
    )
}
export default CreatePostPage;