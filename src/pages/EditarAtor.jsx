import React, { useEffect, useState } from 'react'
import { getAtor, updateAtor } from '../api/atores';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Button } from 'react-bootstrap';
import { getFilmes } from '../api/filme';

const EditarAtor = () => {
  const {register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const [filmes, setFilmes] = useState([]);


  function carregarFilmes() {
    getFilmes().then((dados) => {
      setFilmes(dados);
    });
}

  function atualizarAtor(dados){
    updateAtor(id, dados).then( (resposta) => {
      toast.success(resposta.message)
      navigate("/atores")
    }).catch( (err) => {
      toast.error("Erro ao atualizar o Ator!")
    })
  }

  function carregarAtores(){
    getAtor(id).then( (dados) =>{
      reset(dados)
    }).catch( (err) => {
      navigate("/atores")
    })
  }

  useEffect( () => {
    carregarAtores();
    carregarFilmes();
  },[])

  return (
    <main className="mt-4 container">
    <h1>Editar Ator</h1>
    <hr />

    <form onSubmit={handleSubmit(atualizarAtor)}>
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

export default EditarAtor