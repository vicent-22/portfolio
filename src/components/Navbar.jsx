export default function Navbar() {
  return (
    <header className="nav">
      <div className="container">
        <nav className="nav__links">
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#skills">Skills</a>
          <a className="btn" href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}