import axios from "axios";

// GET filmes
export async function getFilmes() {
    const response = await axios.get("http://localhost:3333/filme");
    return response.data;
}