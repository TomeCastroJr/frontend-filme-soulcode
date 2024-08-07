import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import NovoFilme from "./pages/NovoFilme";
import EditarFilme from "./pages/EditarFilme";
import NotFound from "./pages/NotFound";
import Diretor from "./pages/Diretor";
import NovoDiretor from "./pages/NovoDiretor";
import EditarDiretor from "./pages/EditarDiretor";

function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/filme" element={<Filmes/>} />
          <Route path="/filme/novo" element={<NovoFilme/>} />
          <Route path="/filme/editar/:id" element={<EditarFilme/>} />

          <Route path="/diretor" element={<Diretor/>} />
          <Route path="/diretor/novo" element={<NovoDiretor/>} />
          <Route path="/diretor/editar/:id" element={<EditarDiretor/>} />
          
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" />
    </>
  )
}

export default App
