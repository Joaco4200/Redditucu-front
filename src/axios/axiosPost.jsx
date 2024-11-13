import axios from "axios";

export async function savePost(postData){
    const response= await axios.post('http://localhost:8080/post',postData)
    return response.data;
}

export async function getPosts(){
    const response= await axios.get('http://localhost:8080/getpost')
    return response.data;
}