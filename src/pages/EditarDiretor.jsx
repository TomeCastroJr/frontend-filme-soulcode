import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const EditarDiretor = () => {
  return (
    <main className="mt-4 container">
        <h1>Editar Diretor</h1>
        <hr />
        <Button as={Link} to="/diretor/novo">
            Editar Diretor
        </Button>
    </main>
  )
}

export default EditarDiretor