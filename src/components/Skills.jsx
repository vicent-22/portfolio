import iconHtml from "../assets/html.png"
import iconJs from "../assets/js.png"
import iconCSS from "../assets/css.png"
import iconGH from "../assets/github.png"
import iconReact from "../assets/react.png"
import iconNode from "../assets/nodejs.png"
import iconExpress from "../assets/express.png"
import iconMySql from "../assets/mysql.png"
import iconGit from "../assets/git.png"

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="grid grid--skills">
          <div className="card">
            <h3>Frontend</h3>
            <div className="icons">
              <p className="muted"><img src={iconHtml} alt="" /></p>
              <p className="muted"><img src={iconCSS} alt="" /></p>
              <p className="muted"><img src={iconJs} className="img-js" alt="" /></p>
              <p className="muted"><img src={iconReact} alt="" /></p>
            </div>
          </div>
          <div className="card">
            <h3>Backend</h3>
            <div className="icons">
              <p className="muted"><img src={iconNode} alt="" /></p>
              <p className="muted"><img src={iconExpress} alt="" /></p>
            </div>
          </div>
          <div className="card">
            <h3>Base de datos</h3>
            <p className="muted"><img src={iconMySql} alt="" /></p>
          </div>
          <div className="card">
            <h3>Control de versiones</h3>
            <div className="icons">
              <p className="muted"><img src={iconGH} alt="" /></p>
              <p className="muted"><img src={iconGit} alt="" /></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
