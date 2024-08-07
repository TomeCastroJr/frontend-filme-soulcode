import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const NovoDiretor = () => {
  return (
    <main className="mt-4 container">
        <h1>Novo Diretor</h1>
        <hr />
        <Button as={Link} to="/diretor/novo">
            Cadastrar Diretor
        </Button>
    </main>
  )
}

export default NovoDiretor