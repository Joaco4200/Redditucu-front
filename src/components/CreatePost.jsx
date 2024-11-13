import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { savePost } from '../axios/axiosPost';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePost = () => {

    const {user} = useAuth0();
    const [postTitle, SetPostTitle] = useState("");
    const [postContent,SetPostContent] = useState("");

    const handleTitleChange = (e) => SetPostTitle(e.target.value);
    const handleContentChange = (e) => SetPostContent(e.target.value);
    
    const handlePostButtonClick = async()=> {
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
        <div className="container-fluid">
            <div className="row">
                <div className="col-2" style={{ backgroundColor: 'black' }}></div>

                <div className="col-10 mt-5">
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
                    
                        <button className="btn btn-secondary w-100" onClick={handlePostButtonClick}> Post </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CreatePost;