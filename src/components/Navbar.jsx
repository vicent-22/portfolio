import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const go = (id) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <header className="nav">
      <div className="container">
        <nav className="nav__links">
          <Link to="/about">Sobre mí</Link>
          <a href="#" onClick={(e) => (e.preventDefault(), go("projects"))}>Proyectos</a>
          <a href="#" onClick={(e) => (e.preventDefault(), go("skills"))}>Skills</a>
          <a className="btn" href="#" onClick={(e) => (e.preventDefault(), go("contact"))}>Contacto</a>
        </nav>
      </div>
    </header>
  );
}
