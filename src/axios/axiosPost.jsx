import axios from "axios";

export async function savePost(postData){
    const response= await axios.post('http://localhost:8080/post',postData)
    return response.data;
}

export async function getAllPosts(){
    const response= await axios.get('http://localhost:8080/getAllPosts')
    return response.data;
}

export async function getPostByPostId(postId){
    const response= await axios.get('http://localhost:8080/getPostById', { params: { postId } })
    return response.data;
}