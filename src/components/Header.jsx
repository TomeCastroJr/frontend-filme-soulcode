import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header w-100 px-3 py-2 bg-header">
      <nav className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="color-header">
          LOGO FILME
        </Link>
        <div className="d-flex gap-5">
          <Link className="color-header" to="/filme">Filmes</Link>
          <Link className="color-header" to="/diretor">Diretores</Link>
          <Link className="color-header" to="/atores">Atores</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header