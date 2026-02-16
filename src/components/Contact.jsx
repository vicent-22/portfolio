import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";



export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="footer-contact">
          <h2>Contacto</h2>
          <div className="actions">
            <a className="btn-contact" href="mailto:vicentorres22@gmail.com"><MdOutlineEmail /></a>
            <a className="btn-contact"  href="https://github.com/vicent-22">
              <FaGithub />
            </a>
            <a className="btn-contact" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vicent-torres-p/">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
