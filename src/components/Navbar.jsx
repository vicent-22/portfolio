import { Link, useLocation, useNavigate } from "react-router-dom";
import homeIcon from "../assets/home_icon.png";

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
          <span className="nav-home" >
            <Link to="/"><img src={homeIcon} alt="" /></Link>
          </span>
          <div className="nav-right">
            <Link to="/about">Sobre mí</Link>
            <a href="#" onClick={(e) => (e.preventDefault(), go("projects"))}>Proyectos</a>
            <a href="#" onClick={(e) => (e.preventDefault(), go("skills"))}>Skills</a>
            <a className="btn" href="#" onClick={(e) => (e.preventDefault(), go("contact"))}>Contacto</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
