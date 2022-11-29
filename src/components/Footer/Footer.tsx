import "./Footer.css";
import { GitHubIcon, LinkedinIcon, EmailIcon } from "../../assets/IconsSvg"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrappler">
        <p>Todos direitos reservados - Thiago Rocha &copy;</p>
        <ul>
          <li>
            <a href="https://github.com/ThiagooRocha" target="blank">
              <GitHubIcon/>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thiagoo-rocha/"
              target="blank"
            >
              <LinkedinIcon/>
            </a>
          </li>
          <li>
            <a href="mailto:thiagorochakl@gmail.com" target="blank">
              <EmailIcon/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
