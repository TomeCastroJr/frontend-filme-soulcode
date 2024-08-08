import axios from "axios";

export async function getDiretor() {
    const response = await axios.get("http://localhost:3333/diretor");
    return response.data;
}
export async function getDiretores(id){
    const response = await axios.get(`http://localhost:3333/diretor/${id}`);
    return response.data;
}
export async function addDiretor(data){
    const response = await axios.post("http://localhost:3333/diretor", data);
    return response.data;
}
export async function updateDiretor(id, data){
    const response = await axios.put(`http://localhost:3333/diretor/${id}`, data);
    return response.data;
}
export async function deleteDiretor(id){
    const response = await axios.delete(`http://localhost:3333/diretor/${id}`);
    return response.data;
}