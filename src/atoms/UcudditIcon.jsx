import React from "react";
import { useNavigate } from "react-router-dom";


const UcudditIcon = () => {
    const navigate= useNavigate()

    const handleClick = () =>{
        navigate('/home-page')
    }

    return(
            <button className="btn" onClick={handleClick}>
                <div className="d-flex align-items-center gap-3">
                    <img src= "/ucublanco.png" alt= "logo" style={{width: '3vw', height: '3vw' , marginLeft:'1.5rem'}}/>
                    <div style={{ fontWeight: 'bold', fontFamily: 'Noto Sans', fontSize: '1.6rem', color: '#ffffff' }}>UCUDDIT</div>
                </div>
            </button>
    )
}

export default UcudditIcon;