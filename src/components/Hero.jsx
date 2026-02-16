import perfil from "../assets/perfil.jpeg"

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__left">
          <div className="avatar">
            <div className="avatar__inner" aria-label="Foto de perfil">
              <img src={perfil} alt="Foto de perfil" className="avatar_img"/>
            </div>
          </div>
        </div>
        {/* Texto */}
        <div className="hero__right">
          <h1 className="hero__title">
            <span className="hero__hi">Hola!</span> soy{" "}
            <span className="hero__name">Vicent</span>
          </h1>

          <p className="hero__subtitle">
            Desarrollo aplicaciones web con React y Node.js, cuidando tanto la experiencia de usuario como la calidad del código. Aquí puedes ver algunos de mis proyectos y las tecnologías con las que trabajo.
          </p>

        </div>

        {/* Foto */}
        
      </div>
    </section>
  );
}
