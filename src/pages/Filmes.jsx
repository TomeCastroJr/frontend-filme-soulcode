import { Button, Table, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { deleteFilme, getFilmes } from "../api/filme"
import Loader from "../components/Loader"
import toast from "react-hot-toast"



const Filmes = () => {
  const [filmes, setFilmes] = useState(null);

  function carregarFilmes() {
    getFilmes().then((dados) => {
      setFilmes(dados);
    })
  }

  function deletarFilme(id) {
    const deletar = confirm("Tem certeza que deseja excluir o filme ?")

    if (deletar) {
      deleteFilme(id).then((resposta) => {
        toast.success("Filme deletado");
        carregarFilmes();
      })
    }

  }

  useEffect(() => {
    carregarFilmes();
  }, [])

  return (
    
    <>
    <div className="d-flex flex-column head">
    <h1 className="text-center mt-3 text-color">Filmes</h1>
     <Button className="bttn" variant="warning" as={Link} to="/filme/novo">
        Adicionar Filme
      </Button>
      </div>
    <main className="mt-4 container d-flex text-center main">
      <hr />
      {filmes ?

        filmes.map((filme) => {

          return (

            <><Card className="container d-flex card-style">
              <Card.Body className="c-body">
                <Card.Title>{filme.titulo}</Card.Title>
                <Card.Text>Lançamento: {filme.data_lancamento ? new Date(filme.data_lancamento + "T00:00:00").toLocaleDateString() : "-"}</Card.Text>
                <Card.Text> ID: {filme.id}</Card.Text>
                <Card.Text>{filme.descricao}</Card.Text>
                </Card.Body>
                <div className="d-flex btn-area">
                  <Button size="sm" variant="outline-danger" as={Link} className="mx-2" onClick={() => deletarFilme(filme.id)}>Excluir</Button>
                  <Button size="sm" variant="outline-dark" as={Link} to={`/filme/editar/${filme.id}`}>
                    Editar
                  </Button>
                </div>
            </Card> </>)
        })

        : <Loader />}
      <hr />
    </main></>
  )}

  export default Filmes;
