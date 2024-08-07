import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Diretor = () => {
  return (
    <main className="mt-4 container">
    <h1>Diretor</h1>
    <Button as={Link} to="/diretor/novo">
        Adicionar Diretor
    </Button>
    <hr />
</main>
  )
}

export default Diretor