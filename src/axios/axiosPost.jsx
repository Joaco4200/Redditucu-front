import axios from "axios";

export async function CreatePost(postData){
    const response= await axios.post('http://localhost:8080/post',postData)
    return response.data;
}