import { useState, useEffect } from "react";
import Header from "../components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { getPosts } from "../axios/axiosPost";
import { CreateUser } from "../axios/axiosUser";
import { useNavigate } from "react-router-dom";
import Post from "../components/Post";
import HomeButton from "../atoms/HomeButton";

const HomePage = () => {

    const {user} = useAuth0();// El hook proporciona acceso a datos y funciones relacionadas con el usuario autenticado. con el {user} desestructura el objeto que devuelve auth0 extrayendo lapropiedar user(datos del user).
    
    const [posts,setPosts] = useState([]);
    const navigate= useNavigate();

    const handleClick= () =>{
        navigate('/single-post-page')
    }

    useEffect(()=> {
        const postUserData = async() => {
            if (user) {
                const userData ={
                    name: user.name,
                    email: user.email,
                    imgUrl: user.picture,
                    auth0id: user.sub
                }
                await CreateUser(userData)
            }
        };

        postUserData();
    }, [user]);

    useEffect(()=>{
        const getPostData = async()=> {
            const postData= await getPosts();
            setPosts(postData); 
        }
        getPostData();
    }, []);

    return (
        <div className="">
            <Header/>
            <div className="d-flex" style={{height: '44.5vw'}}>
                <div className="col-2 d-flex flex-column align-items-center justify-content-start border border-secondary border-bottom-0"> 
                    <HomeButton/>
                </div>
                <div className="col-10 d-flex justify-content-center mt-4">
                    <div className="">
                        {
                            posts.map(post =>{
                                const  {title, content, created_at, postId, user} = post

                                return(
                                    <div>
                                        <Post title={title} content={content} created_at={created_at} postId={postId} user={user}/> 
                                        <button className="btn" onClick={handleClick}>Add comment...</button>      
                                    </div>         
                                )
                                
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default HomePage;