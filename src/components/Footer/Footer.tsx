import "./Footer.css";
import { SvgComponent1, SvgComponent2, SvgComponent3 } from "../../assets/IconsSvg"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrappler">
        <p>Todos direitos reservados - Thiago Rocha &copy;</p>
        <ul>
          <li>
            <a href="https://github.com/ThiagooRocha" target="blank">
              <SvgComponent1/>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thiagoo-rocha/"
              target="blank"
            >
              <SvgComponent2/>
            </a>
          </li>
          <li>
            <a href="mailto:thiagorochakl@gmail.com" target="blank">
              <SvgComponent3/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
