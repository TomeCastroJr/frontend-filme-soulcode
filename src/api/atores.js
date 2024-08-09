import axios from "axios";

export async function getAtores() {
    const response = await axios.get("http://localhost:3333/ator");
    return response.data;
}

export async function getAtor(id) {
    const response = await axios.get(`http://localhost:3333/ator/${id}`);
    return response.data;
}

export async function addAtor(data) {
    const response = await axios.post("http://localhost:3333/ator", data);
    return response.data;
}

export async function updateAtor(id, data) {
    const response = await axios.put(`http://localhost:3333/ator/${id}`, data);
    return response.data;
}

export async function deleteAtor(id) {
    const response = await axios.delete(`http://localhost:3333/ator/${id}`);
    return response.data;
}