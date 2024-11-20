import { useState, useEffect } from "react";
import Header from "../components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { getPosts } from "../axios/axiosPost";
import { CreateUser } from "../axios/axiosUser";
import Post from "../components/Post";
import HomeButton from "../atoms/HomeButton";
import { useNavigate } from "react-router-dom";
import PostsList from "../components/PostList";

const HomePage = () => {

    const {user} = useAuth0();// El hook proporciona acceso a datos y funciones relacionadas con el usuario autenticado. con el {user} desestructura el objeto que devuelve auth0 extrayendo lapropiedar user(datos del user).
   
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

    return (
        <div>
            <Header/>
            <div className="d-flex" style={{height: '44.5vw'}}>
                <div className="col-2 d-flex flex-column align-items-center justify-content-start border border-secondary border-bottom-0 "> 
                    <a className="mt-5">
                        <HomeButton/>
                    </a>
                </div>
                <div className="col-10 d-flex justify-content-center mt-4" style={{marginLeft:'-12.5rem'}}>
                   <PostsList/>
                </div>
            </div>
        </div>   
    )
}

export default HomePage;