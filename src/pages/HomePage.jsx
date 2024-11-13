import { useState, useEffect } from "react";
import Header from "../components/Header";
import PostsList from "../components/PostsList";
import { useAuth0 } from "@auth0/auth0-react";
import { CreateUser } from "../axios/axiosUser";
import Post from "../components/Post";

const HomePage = () => {

    const {user} = useAuth0();
    
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
        <div className="">
            <Header/>
            <div className="d-flex" style={{height: '44.5vw'}}>
                <div className="col-2 d-flex flex-column align-items-center justify-content-start border border-secondary border-bottom-0"> 
                    <button className="btn btn-outline-dark rounded-pill btn-lg mt-5">Home</button> 
                </div>
                <div className="col-10 d-flex justify-content-center mt-3">
                    <PostsList/>
                </div>
            </div>
        </div>   
    )
}

export default HomePage;