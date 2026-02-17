import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>Proyectos</h2>

        <div className="grid">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>

              <div className="chips">
                {p.stack.map((s) => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </div>

              <div className="actions">
                <a className="btn btn--ghost" href={p.repo}>
                  Código
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
