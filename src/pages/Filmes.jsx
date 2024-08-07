import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getFilmes } from "../api/filme"

const Filmes = () => {
  const [filmes, setFilmes] = useState(null);

  function carregarFilmes() {
    getFilmes().then((dados) => {
      console.log(dados);
      setFilmes(dados);
    })
  }

  useEffect(() => {
    carregarFilmes();
  }, [])

  return (
    <main className="mt-4 container">
      <h1>Filmes</h1>
      <Button as={Link} to="/filme/novo">
        Adicionar Filme
      </Button>
      <hr />
    </main>
  )
}

export default Filmes