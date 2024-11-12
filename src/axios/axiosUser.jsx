import axios from "axios";

export async function CreateUser(userData){
    const response = await axios.post('http://localhost:8080/user', userData)
    return response.data;
}

