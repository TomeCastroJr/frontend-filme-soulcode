import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { deleteAtor, getAtores } from '../api/atores';
import Loader from "../components/Loader";
import { Table } from "react-bootstrap";
import toast from 'react-hot-toast';
import { getFilmes } from '../api/filme';


const Atores = () => {
    const [atores, setAtores] = useState(null);
    const [filmes, setFilmes] = useState([]);

    function removerAtor(id){
      const remover = confirm("Deseja excluir?");

      if(remover){
        deleteAtor(id).then( (resposta) => {
          toast.success(resposta.message)
          carregarAtores();
        })
      }
    }

    function carregarAtores(){
        getAtores().then( (dados) => {
           setAtores(dados) 
        })
    }

    function carregarfilmes(){
      getFilmes().then( (dados) => {
        console.log(dados)
        setFilmes(dados)
      })
    }

    

    useEffect( ()=> {
        carregarAtores();
        carregarfilmes();
    },[])

  return (
    <main className="mt-4 container">
        <h1>Atores</h1>
        <Button as={Link} to="/atores/novo">
            Adicionar Atores
        </Button>
        <hr />
        {
        atores ? 
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Nascimento</th>
              <th>Nacionalidade</th>
              <th>Filme</th>
              <th>Ação</th>
            </tr>
            {
              atores.map( (ator) => {
                const filme = filmes.find((filme) => filme.id === ator.filmeId);
                return (
                  <tr key={ator.id}>
                    <td>{ ator.id }</td>
                    <td>{ ator.nome }</td>
                    <td>{ ator.nascimento ? new Date(ator.nascimento).toLocaleDateString() : "-" }</td>
                    <td>{ ator.nacionalidade }</td> 
                    <td>{ filme && filme.id === ator.filmeId ? filme.titulo: " sem filme"}</td>    
                    <td>
                      <div className="d-flex">
                        <Button size="sm" variant="danger" as={Link} className="mx-2" onClick={()=> removerAtor(ator.id)}>Excluir</Button>
                        <Button size="sm" as={Link} to={`/atores/editar/${ator.id}`}>
                          Editar
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })
            }
          </thead>
        </Table>:
        <Loader />
      }
    </main>
  )
}

export default Atores