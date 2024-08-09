import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom"
import { addAtor } from '../api/atores';
import toast from 'react-hot-toast';
import { getFilmes } from '../api/filme';
import { useEffect, useState } from 'react';

const NovoAtor = () => {
    const {register, handleSubmit, formState: { errors }, reset } = useForm();

    const [filmes, setFilmes] = useState([]);
    const navigate = useNavigate();

    function cadastrarAtor(dados){
        addAtor(dados).then( () => {
            toast.success("Ator inserido com sucesso.")
            navigate("/atores")
        })
    }

    function carregarFilmes() {
        getFilmes().then((dados) => {
          setFilmes(dados);
        });
    }
      useEffect(() => {
        carregarFilmes();
      }, []);


  return (
    <main className="mt-4 container">
    <h1>Cadastrar Ator</h1>
    <hr />
    <form onSubmit={handleSubmit(cadastrarAtor)}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input 
            type="text" 
            id="nome"
            className="form-control"
            {... register("nome", { required: true, maxLength: 200 })}
          />
          {errors.nome && (
            <small className="text-danger">Nome Obrigatório</small>
          )}
        </div>

        <div>
          <label htmlFor="nascimento">Nascimento</label>
          <input 
            type="date" 
            id="nascimento"
            className="form-control"
            {...register("nascimento", { required: true })}
          />
          {errors.nascimento && (
            <smal className="text-danger">Data obrigatória</smal>
          )}
        </div>

        <div>
          <label htmlFor="nacionalidade">Nacionalidade</label>
          <input 
            type="text" 
            id="nacionalidade"
            className="form-control"
            {... register("nacionalidade", { required: true })}
          />
          {errors.nacionalidade && (
            <small className="text-danger">Nacionalidade obrigatório</small>
          )}
        </div>

        <div>
            <label htmlFor="filmeId">Filmes</label>
            <select
                className="form-select"
                {...register("filmeId", { required: true, valueAsNumber: true })}
            >
                <option value="">Selecione um filme</option>
                {filmes.map((filme) => {
                return (
                    <option key={filme.id} value={filme.id}>
                    {filme.titulo} - {filme.id}
                    </option>
                );
                })}
            </select>
            {errors.filmeId && (
                <small className="text-danger">Selecione um filme</small>
            )}
        </div>


        
        <Button className="mt-3" type="submit">
          Cadastrar Ator
        </Button>
    </form>
</main>
  )
}

export default NovoAtor