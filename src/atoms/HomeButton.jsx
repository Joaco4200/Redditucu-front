import { useNavigate } from "react-router-dom";

const HomeButton = ()=>{
    const navigate= useNavigate();
    
    const handleClick= ()=>{
        navigate('/home-page')
    }

    return(
        <button className="btn btn-outline-dark rounded-pill btn-lg mt-5" onClick={handleClick}>Home</button> 
    )
}

export default HomeButton;