import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CreatePost from "../components/CreatePost";
import { useAuth0 } from "@auth0/auth0-react";

const CreatePostPage = () =>{

    return (
        <div>
            <Header/>
            <CreatePost/>
        </div>
    )
}

export default CreatePostPage;