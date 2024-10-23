import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = () =>{

    return(

        <form className='d-flex mt-2' style ={{width: "35%", height: "80%"}}>
            <input type= "text" className="form-control " placeholder= "Search..." style ={{borderRadius: '25px'}}/>
        </form>
    )
}

export default SearchBar;