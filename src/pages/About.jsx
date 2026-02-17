import perfil from "../assets/perfil.jpeg"
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <main className="section">
      <div className="container">
        <div className="avatar2">
          <div className="avatar__inner" aria-label="Foto de perfil">
            <img src={perfil} alt="Foto de perfil" className="avatar_img"/>
          </div>
        </div>
        <h1>Sobre mí</h1>
        <p>Soy desarrollador web con formación en Sistemas Informáticos en Red, una etapa que me permitió entender cómo funcionan la infraestructura, los sistemas y las redes desde dentro. Fue ahí donde tuve mi primer contacto con la programación, y lo que comenzó como una curiosidad técnica terminó despertando un interés cada vez mayor por el desarrollo de software.
        A medida que profundizaba en el desarrollo, descubrí que lo que más me motivaba era crear soluciones, transformar ideas en aplicaciones reales y mejorar la experiencia de quienes las usan. Esa motivación me llevó a centrarme de lleno en la programación, formándome en tecnologías como JavaScript, React y Node.js, y aplicando estos conocimientos en proyectos propios.
        Me considero una persona constante y curiosa, con interés por entender cómo encajan todas las piezas de una aplicación, desde la lógica hasta el resultado final. Disfruto enfrentándome a nuevos retos técnicos y mejorando mis habilidades a través de la práctica y la experiencia.
        Actualmente estoy buscando una oportunidad laboral que me permita adquirir experiencia profesional, seguir aprendiendo en un entorno real y aportar valor al equipo desde el primer día, con ganas de crecer y de desarrollarme como programador.</p>
      </div>
      <button 
        className="btn btn--ghost actions"
        onClick={() => navigate(-1)}>
        Volver
      </button>
    </main>
  );
}
