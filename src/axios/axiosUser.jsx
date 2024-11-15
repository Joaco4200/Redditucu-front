import axios from "axios"; //biblioteca para solicitudes http 

export async function CreateUser(userData){ // axios envia solicitud http post a servidor para crear usuario. envia los datos alaAPI.
    const response = await axios.post('http://localhost:8080/user', userData) //ruta del backend que maneja la solicitud tipo post. userData= JSON. promise se resuelve con respuesta http del servidor.
    return response.data;
}

