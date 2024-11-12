import { useState, useEffect } from "react";
import Header from "../components/Header";
import PostsList from "../components/PostsList";
import { useAuth0 } from "@auth0/auth0-react";
import { CreateUser } from "../axios/axiosUser";

const HomePage = () => {

    const {user} = useAuth0();
    
    useEffect(()=> {
        const handleLogin = async() => {
            if (user) {
                console.log(user);
                const userData ={
                    name: user.name,
                    email: user.email,
                    imgUrl: user.picture,
                    auth0id: user.sub
                }

                try{
                    await CreateUser(userData)
                } catch(error){
                    console.error("User cant becreated",error);
                }
            }
        };

        handleLogin();
    }, [user]);

    return (
        <div className="">
            <Header/>
            <PostsList/>   
        </div>   
    )
}

export default HomePage;