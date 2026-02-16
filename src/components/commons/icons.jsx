import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import "../../styles/global.css"

const SocialIcons = () => {
  return (
    <div className="icons">
      <a
        href="https://www.linkedin.com/in/vicent-torres-p/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
        aria-label="Linkedin"
      >
        <FaLinkedinIn className="h-7 w-7" />
      </a>

      <a
        href="https://github.com/vicent-22"
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
        aria-label="Github"
      >
        <FaGithub className="h-7 w-7" />
      </a>

    </div>
  );
};

export default SocialIcons;