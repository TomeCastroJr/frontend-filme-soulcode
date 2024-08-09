import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { deleteAtor, getAtores } from '../api/atores';
import Loader from "../components/Loader";
import toast from 'react-hot-toast';
import { getFilmes } from '../api/filme';
import Filmes from './Filmes';


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
        setFilmes(dados)
      })
    }

    useEffect( ()=> {
        carregarAtores();
        carregarfilmes();
    },[])

  return (
    <>
    <div className="d-flex flex-column head">
    <h1 className="mt-3 text-color">Atores</h1>
    <Button variant="warning" as={Link} to="/atores/novo" className="bttn">
      Adicionar Ator
    </Button>
    </div>
    <main className="mt-4 container d-flex text-center main ">
        <hr />

        {atores ?
          atores.map((ator) => {
            const filme = filmes.find((filme) => filme.id === ator.filmeId);
            return (
              <Card key={ator.id} className="container d-flex card-style">
                <Card.Body>
                  <Card.Title>{ator.nome}</Card.Title>
                  <Card.Text>{ator.nacionalidade}</Card.Text>
                  <Card.Text> ID: {ator.id}</Card.Text>
                  <Card.Text>Data de Nascimento: { ator.nascimento ? new Date(ator.nascimento).toLocaleDateString() : "-" }</Card.Text>
                  <Card.Text>Filmes: { filme && filme.id === ator.filmeId ? filme.titulo: " sem filme"}</Card.Text>
                </Card.Body>
                <div className="d-flex btn-area">
                  <Button size="sm" variant="outline-danger" as={Link} className="mx-2" onClick={() => removerAtor(ator.id)}>Excluir</Button>
                  <Button size="sm" variant="outline-dark" as={Link} to={`/ator/editar/${ator.id}`}>
                    Editar
                  </Button>
                </div>
              </Card>);
          })

          : <Loader />}
        <hr />
      </main></>
    )}
  

export default Atores