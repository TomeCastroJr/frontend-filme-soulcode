import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const NovoFilme = () => {
  return (
    <main className="mt-4 container">
        <h1>Novo Filme</h1>
        <hr />
        <Button as={Link} to="/filme/novo">
            Cadastrar Filme
        </Button>
    </main>
  )
}

export default NovoFilme