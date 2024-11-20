import { useState,useEffect } from "react";
import Header from "../components/Header";
import HomeButton from "../atoms/HomeButton";
import { useParams } from "react-router-dom";
import { getCommentByPostId} from "../axios/axiosComment";
import { getPostByPostId} from "../axios/axiosPost";
import Post from "../components/Post";
import CreateComment from "../components/CreateComment";
import Comment from "../components/Comment";

const SinglePostPage = ()=>{
    
    const {postId} = useParams();
    const[post,setPost] = useState();
    const[comments,setComments]= useState([]);
    

    useEffect(()=>{
        const getPostAndComments= async()=>{
            const postData= await getPostByPostId(postId);
            setPost(postData);

            const commentData= await getCommentByPostId(postId);
            setComments(commentData);
        }    
        if(postId){
            getPostAndComments();
        }
    }, [postId])

    return(
        <div >
            <Header/>
            <div className="d-flex" style={{height: '44.5vw'}}>
                <div className="col-2 d-flex flex-column align-items-center justify-content-start border border-secondary border-bottom-0"> 
                    <a className="mt-5">
                        <HomeButton/>
                    </a>
                </div>
                <div className="col-10 d-flex justify-content-center mt-4"> 
                    <div style={{marginRight:'25rem'}}>
                        {post ? (
                            <Post title={post.title} content={post.content} created_at={post.created_at} postId={postId} user={post.user} />
                        ) : (
                            <p>Loading post...</p> 
                        )}
                        <div className="mt-1">
                            <CreateComment 
                                postId={postId} 
                                onNewComment={(newComment) => setComments((allComments) => [...allComments, newComment])} 
                            />
                        </div>
                        <div className="mt-4">
                            {
                                comments.map(comment=>{
                                    const {postId, user, content, created_at} = comment;
                                    
                                    return(
                                        <div className="p-1">
                                            <Comment postId={postId} user={user} content={content} created_at={created_at}/>
                                        </div>  
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}
 
export default SinglePostPage;