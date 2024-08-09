import { Button, Table } from "react-bootstrap"
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
    <main className="mt-4 container">
      <h1>Filmes</h1>
      <Button variant="warning" as={Link} to="/filme/novo">
        Adicionar Filme
      </Button>
      <hr />
      {
        filmes ?
          <Table className="text-center">
            <thead>
              <tr>
                <th>Id</th>
                <th>Título</th>
                <th>Descrição</th>
                <th>Lançamento</th>
                <th>Ação</th>
              </tr>
              {
                filmes.map((filme) => {
                  return (
                    <tr key={filme.id}>
                      <td>{filme.id}</td>
                      <td>{filme.titulo}</td>
                      <td>{filme.descricao}</td>
                      <td>{filme.data_lancamento ? new Date(filme.data_lancamento + "T00:00:00").toLocaleDateString() : "-"}</td>
                      <td>{filme.id}</td>
                      <td>
                        <div className="d-flex">
                          <Button size="sm" variant="outline-danger" as={Link} className="mx-2" onClick={() => deletarFilme(filme.id)}>Excluir</Button>
                          <Button size="sm" variant="outline-dark" as={Link} to={`/filme/editar/${filme.id}`}>
                            Editar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </thead>
          </Table> :
          <Loader />
      }

    </main>
  )
}

export default Filmes