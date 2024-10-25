import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = () =>{

    return(

        <form className='d-flex align-items-center' style ={{width: "30vw"}}>
            <input type= "text" className="form-control" placeholder= "Search..." style ={{borderRadius: '25px'}}/>
        </form>
    )
}

export default SearchBar;