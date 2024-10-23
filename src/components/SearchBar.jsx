import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = () =>{

    return(
        <form className='d-flex'>
            <input type= "text" className="form-control" placeholder= "Search..."/>
            <button type= "submit" className='btn btn-secondary'>Search</button>
        </form>
    )
}

export default SearchBar;