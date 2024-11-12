import React, { useEffect } from "react";
import Header from "../components/Header";
import CreatePost from "../components/CreatePost";
import { useAuth0 } from "@auth0/auth0-react";

const CreatePostPage = () =>{

    const {user} = useAuth0();

    useEffect(() =>{ 
        
    },)

    return (
        <div>
            <Header/>
            <CreatePost/>
        </div>
    )
}

export default CreatePostPage;