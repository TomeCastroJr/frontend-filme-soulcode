import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import {getDiretor,updateDiretor} from "../api/diretor";


const EditarDiretor = () => {
  // método useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //Pega o Id do diretor pela URL
  const { id } = useParams();

  //Para fazer o redirecionamento depois da edição
  const navigate = useNavigate();

  //função de atualização do diretor
  function atualizarDiretor(data) {
    updateDiretor(id, data).then((resposta) => {
      toast.success(resposta.message);
      navigate("/diretor")
    }).catch((err) => {
      toast.error("Erro ao atualizar o diretor!")
    })
  }

  //Carregar os dados do Diretor especifico
  function carregarDiretor() {
    getDiretor(id).then((dados) => {
      reset(dados);
    }).catch((err) => {
      navigate("/diretor");
    });
  }

  //método useEffect
  useEffect(() => {
    carregarDiretor();
  }, []);

  return (
    //criar um form do diretor contendo nome, nascimento e nacionalidade
    <main className="mt-4 container">
      <h1>Editar Diretor</h1>
      <hr />
      <form onSubmit={handleSubmit(atualizarDiretor)}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            className={`form-control ${errors.nome ? "is-invalid" : ""}`}
            id="nome"
            {...register("nome", { required: "O nome é obrigatório" })}
          />
          {errors.nome && <div className="invalid-feedback">{errors.nome.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="nascimento" className="form-label">Data de Nascimento</label>
          <input
            type="date"
            className={`form-control ${errors.nascimento ? "is-invalid" : ""}`}
            id="nascimento"
            {...register("nascimento", { required: "A data de nascimento é obrigatória" })}
          />
          {errors.nascimento && <div className="invalid-feedback">{errors.nascimento.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="nacionalidade" className="form-label">Nacionalidade</label>
          <input
            type="text"
            className={`form-control ${errors.nacionalidade ? "is-invalid" : ""}`}
            id="nacionalidade"
            {...register("nacionalidade", { required: "A nacionalidade é obrigatória" })}
          />
          {errors.nacionalidade && <div className="invalid-feedback">{errors.nacionalidade.message}</div>}
        </div>

        <Button type="submit" variant="primary">Salvar Alterações</Button>
        <Button as={Link} to="/diretor" variant="secondary" className="ms-2">Cancelar</Button>
      </form>
    </main>
  );
};

export default EditarDiretor;