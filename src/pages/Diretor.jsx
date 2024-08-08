import { Button, Table } from "react-bootstrap"
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
  }, []);
  
  return (
    <main className="mt-4 container">
      <h1>Diretor</h1>
      <Button as={Link} to="/diretor/novo">
        Adicionar Diretor
      </Button>
      {
        diretor ?
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Nascimento</th>
                <th>Nacionalidade</th>
                <th>Ação</th>
              </tr>
              {
                diretor.map((diretor) => {
                  return (
                    <tr key={diretor.id}>
                      <td>{diretor.id}</td>
                      <td>{diretor.nome}</td>
                      <td>{diretor.nascimento}</td>
                      <td>{diretor.nacionalidade}</td>

                      <td>
                        <div className="d-flex">
                          <Button size="sm" variant="danger" as={Link} className="mx-2" onClick={() => deletarDiretor(diretor.id)} >Excluir</Button>
                          <Button size="sm" as={Link} to={`/diretor/editar/${diretor.id}`}>
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

      <hr />
    </main>
  )
}

export default Diretor