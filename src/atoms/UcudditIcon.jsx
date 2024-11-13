import React from "react";
import { useNavigate } from "react-router-dom";

const UcudditIcon = () => {
    const navigate= useNavigate()

    const handleClick = () =>{
        navigate('/home-page')
    }

    return(
            <button className="btn" onClick={handleClick}>
                <div className="d-flex align-items-center">
                    <img src= "/logoucu.png" alt= "logo" style={{width: '5vw', height: '5vw' }}/>
                    <div style={{ fontWeight: 'bold', fontFamily: 'Noto Sans', fontSize: '1.6rem', color: '#ffffff' }}>UCUDDIT</div>
                </div>
            </button>
    )
}

export default UcudditIcon;