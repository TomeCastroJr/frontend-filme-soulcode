import axios from "axios";

// GET filmes
export async function getFilme() {
    const response = await axios.get("http://localhost:3333/filme");
    return response.data;
}


export async function getFilme(id) {
    const response = await axios.get(`http://localhost:3333/filme/${id}`);

    return response.data;
}

export async function addFilme(data) {
    const response = await axios.post("http://localhost:3333/filme", data);

    return response.data;
}

export async function updateFilme(id, data) {
    const response = await axios.put(`http://localhost:3333/filme/${id}`, data);

    return response.data;
}

export async function deleteFilme(id) {
    const response = await axios.delete(`http://localhost:3333/filme/${id}`);

}
