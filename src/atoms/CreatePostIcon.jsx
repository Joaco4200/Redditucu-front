import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreatePostIcon = () => {

    const navigate= useNavigate();

    const handleClick = () =>{
        navigate('/create-post-page');
    }

    return (
        <button className="btn plus-btn text-light" style={{fontWeight: 'bold', fontFamily: 'Noto Sans', fontSize: '1.3rem'}} onClick={handleClick}> + Create </button>
    )
}

export default CreatePostIcon;