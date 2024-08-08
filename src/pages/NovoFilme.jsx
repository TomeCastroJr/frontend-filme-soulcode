import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import { addFilme } from "../api/filme";
import toast from "react-hot-toast";

const NovoFilme = () => {
  const {register, handleSubmit, formState: { errors }, reset } = useForm();

  const navigate = useNavigate();

  function cadastrarFilme(dados){
    addFilme(dados).then( (resposta) => {
      toast.success("Filme inserido com sucesso.");
      navigate("/filme");
    }).catch((err)=>{
      toast.error(err.response.data.message)
    })
  }

  return (
    <main className="mt-4 container">
        <h1>Novo Filme</h1>
        <hr />
        <form onSubmit={handleSubmit(cadastrarFilme)}>
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
          Cadastrar filme
        </Button>
      </form>
    </main>
  )
}

export default NovoFilme