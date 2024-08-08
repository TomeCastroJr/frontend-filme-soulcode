import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import { addDiretor } from "../api/diretor";
import { useEffect, useState } from "react";
import { getFilmes } from "../api/filme";



const NovoDiretor = () => {
  // método useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [filmes, setFilmes] = useState([]);

  //Para fazer o redirecionamento depois da edição
  const navigate = useNavigate();

 
  function cadastrarDiretor(data) {
    console.log(data);
    addDiretor(data).then((resposta) => {
      toast.success(resposta.message);
      navigate("/diretor")
    }).catch((err) => {
      toast.error("Erro ao atualizar o diretor!")
      console.error(err);
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
    //criar um form do diretor contendo nome, nascimento e nacionalidade
    <main className="mt-4 container">
      <h1>Novo Diretor</h1>
      <hr />
      <form onSubmit={handleSubmit(cadastrarDiretor)}>
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

        <Button type="submit" variant="primary">Adicionar</Button>
      </form>
    </main>
  );
};

export default NovoDiretor;