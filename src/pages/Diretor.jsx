import { Button, Card} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { getDiretores } from "../api/diretor";
import Loader from "../components/Loader"
import { deleteDiretor } from "../api/diretor";
import toast from "react-hot-toast";


const Diretor = () => {
  const [diretor, setDiretor] = useState(null);

  function carregarDiretor() {
    getDiretores().then((dados) => {
      console.log(dados);
      setDiretor(dados);
    })
  }
  function deletarDiretor(id) {
    const deletar = confirm("Tem certeza que deseja excluir o diretor e seus filmes ?")
    if (deletar) {
      deleteDiretor(id)
        .then((resposta) => {
          toast.success(resposta.message);
          carregarDiretor();
        })
    }
  }
  ;
  useEffect(() => {
    carregarDiretor();
  }, [])

  return (
    <>
    <div className="d-flex flex-column head">
    <h1 className="mt-3 text-color">Diretores</h1>
    <Button variant="warning" as={Link} to="/diretor/novo" className="bttn">
      Adicionar Diretor
    </Button>
    </div>
    <main className="mt-4 container d-flex text-center main ">
        <hr />
        {diretor ?
          diretor.map((diretor) => {
            return (
              <Card key={diretor.id} className="container d-flex card-style">
                <Card.Body className="c-body">
                  <Card.Title>{diretor.nome}</Card.Title>
                  <Card.Text>{diretor.nacionalidade}</Card.Text>
                  <Card.Text> ID: {diretor.id}</Card.Text>
                  <Card.Text> Data de Nascimento: {diretor.nascimento}</Card.Text>
                </Card.Body>
                <div className="d-flex btn-area">
                  <Button size="sm" variant="outline-danger" as={Link} className="mx-2" onClick={() => deletarDiretor(diretor.id)}>Excluir</Button>
                  <Button size="sm" variant="outline-dark" as={Link} to={`/diretor/editar/${diretor.id}`}>
                    Editar
                  </Button>
                </div>
              </Card>);
          })

          : <Loader />}
        <hr />
      </main>
      </>
    )}
  

export default Diretor