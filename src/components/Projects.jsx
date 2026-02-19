import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>Proyectos</h2>

        <div className="grid">
          {projects.map((p) => (
            <article key={p.title} className="card card--flip">
              <div className="card__inner">
                {/* FRONT */}
                <div className="card__face card__face--front">
                  <img className="card__img" src={p.image} alt={p.title} />

                  <h3>{p.title}</h3>

                  <div className="chips">
                    {p.stack.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="actions">
                    <a
                      className="btn btn--ghost"
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Código
                    </a>
                  </div>
                </div>

                {/* BACK */}
                <div className="card__face card__face--back">
                  <h3>{p.title}</h3>
                  <p className="muted">{p.description}</p>

                  <div className="actions">
                    <a
                      className="btn btn--ghost"
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Código
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
