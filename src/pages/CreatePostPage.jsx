import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import HomeButton from "../atoms/HomeButton";
import { savePost } from "../axios/axiosPost";
import { useNavigate } from "react-router-dom";

const CreatePostPage = () =>{

    const {user} = useAuth0();
    const [postTitle, SetPostTitle] = useState("");
    const [postContent,SetPostContent] = useState("");
    const navigate = useNavigate();

    const handleTitleChange = (e) => SetPostTitle(e.target.value);
    const handleContentChange = (e) => SetPostContent(e.target.value);
    
    const handlePostButtonClick =()=>{
        navigate("/home-page")
    }

    const handleSavePostButtonClick = async()=> {
            if(postContent !== ""){
            const postData={
                user: {
                    auth0id: user.sub
                },
                title: postTitle,
                content: postContent,
            }
            try{
                await savePost(postData)
            } catch(error){
                console.error("post cant be created",error);
            }
            }
        }

    return (
        <div className="">
            <Header/>
            <div className="d-flex" style={{height: '44.5vw'}}>
                <div className="col-2 d-flex flex-column align-items-center justify-content-start border border-secondary border-bottom-0"> 
                    <HomeButton/>
                </div>
                <div className="col-10 d-flex justify-content-center mt-4">
                    <div className="container-fluid">            
                        <div className="mx-auto" style={{ maxWidth: '600px' }}>
                            <h2 className="text-center mb-4">Create post</h2>           
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input 
                                        type="text" 
                                        id="title" 
                                        className="form-control" 
                                        placeholder="Title*"
                                        value={postTitle}
                                        onChange={handleTitleChange} 
                                    />
                                </div>
                            
                                <div className="mb-3">
                                    <label htmlFor="content" className="form-label">Body</label>
                                    <textarea 
                                        id="content" 
                                        className="form-control" 
                                        rows="5" 
                                        placeholder="Body*"
                                        value={postContent}
                                        onChange={handleContentChange}
                                    ></textarea>
                                </div>
                        
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Upload image</label>
                                    <input 
                                        type="file" 
                                        id="image" 
                                        className="form-control" 
                                        accept="image/*" 
                                    />
                                </div>
                                <button className="btn btn-secondary w-100" onClick={()=>{handleSavePostButtonClick(); handlePostButtonClick();}}> Post </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default CreatePostPage;