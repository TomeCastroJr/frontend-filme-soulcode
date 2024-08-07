import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Filmes = () => {
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