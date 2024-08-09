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
        <h1 className="text-color text-center">Novo Filme</h1>
        <hr />
        <form onSubmit={handleSubmit(cadastrarFilme)} className="text-color text-center">
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
            className="form-control text-center"
            {...register("data_lancamento", { required: true })}
          />
          {errors.data_lancamento && (
            <smal className="text-danger">Data obrigatória</smal>
          )}
        </div>
      
          
        <Button className="mt-3 mb-3" type="submit" variant="warning">
          Cadastrar filme
        </Button>
        </form>
    </main>
  )
}

export default NovoFilme