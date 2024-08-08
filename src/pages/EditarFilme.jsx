import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom";
import { getFilme, updateFilme } from "../api/filme.js"
import toast from "react-hot-toast";



const EditarFilme = () => {
  const {register, handleSubmit, formState: { errors }, reset } = useForm();

  const navigate = useNavigate();
  const { id } = useParams();

  function carregarFilme(){
    getFilme(id).then( (dados) => {
      reset(dados)

    }).catch( (err) => {
      navigate("/filme")
    })
  }

  function atualizarFilme(dados){
    updateFilme(id, dados).then( (resposta) => {
      toast.success(resposta.message)
      navigate("/filme")
    }).catch( (err) => {
      toast.error(err.response.data.message)
     })
  }

  useEffect( () => {
    carregarFilme();  
  },[])


  return (
    <main className="mt-4 container">
      <h1>Editar Cliente</h1>
      <hr />
      <form onSubmit={handleSubmit(atualizarFilme)}>
        <div>
          <label htmlFor="titulo">Título</label>
          <input 
            type="text" 
            id="titulo"
            className="form-control"
            {... register("titulo", { required: true, maxLength: 200 })}
          />
          {errors.titulo && (
            <small className="text-danger">Título Obrigatório</small>
          )}
        </div>

        <div>
          <label htmlFor="descricao">Descrição</label>
          <input 
            type="text" 
            id="descricao"
            className="form-control"
            {... register("descricao", { required: true })}
          />
          {errors.titulo && (
            <small className="text-danger">Descrição obrigatório</small>
          )}
        </div>

        <div>
          <label htmlFor="dataNasc">Data Lançamento</label>
          <input 
            type="date" 
            id="data_lancamento"
            className="form-control"
            {...register("data_lancamento", { required: true })}
          />
          {errors.data_lancamento && (
            <smal className="text-danger">Data obrigatória</smal>
          )}
        </div>
        
        <div>
          <label htmlFor="nome">Nome do diretor</label>
          <input
            type="text"
            id="nome"
            className="form-control"
            {...register("diretor.nome", { required: true, maxLength: 200 })}
          />
          {errors.diretor?.nome && (
            <small className="text-danger">A cidade é inválida!</small>
          )}
        </div>

        <div>
          <label htmlFor="nascimento">Nascimento</label>
          <input 
            type="date" 
            id="nascimento"
            className="form-control"
            {...register("diretor.nascimento", { required: true })}
          />
          {errors.diretor?.nascimento && (
            <smal className="text-danger">Data de nascimento obrigatória</smal>
          )}
        </div>

        <div>
          <label htmlFor="nacionalidade">Nacionalidade</label>
          <input
            type="text"
            id="nacionalidade"
            className="form-control"
            {...register("diretor.nacionalidade", { required: true, maxLength: 200 })}
          />
          {errors.diretor?.nacionalidade && (
            <small className="text-danger">Nacionalidade obrigatória</small>
          )}
        </div>

        <Button className="mt-3" type="submit">
          Atualizar filme
        </Button>
      </form>
    </main>
  )
}

export default EditarFilme