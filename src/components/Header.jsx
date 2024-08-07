import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header w-100 px-3 py-2">
      <nav className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          Filme
        </Link>
        <div className="d-flex gap-5">
          <Link to="/filme">Filmes</Link>
          <Link to="/diretor">Diretores</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header