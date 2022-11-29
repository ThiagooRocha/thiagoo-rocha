import "./Contact.css";

import {
  WhatsappLogo,
  EnvelopeSimple,
  LinkedinLogo,
  InstagramLogo,
} from "phosphor-react";

export const Contact = () => {
  return (
    <section id="contact">
      {/*
      <div className="custom-shape-divider-top-1669399821">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      */}

      <div className="wrappler">
        <h2 className="title-section">Contact</h2>
        <div className="container">
          <ul>
            <li>
              <a href="https://wa.me/551197723226" target="blank">
                <div className="infos">
                  <WhatsappLogo size={32} weight="light" />
                  WhatsApp
                </div>
                <span>+55 11 97772-3226</span>
              </a>
            </li>
            <li>
              <a href="mailto:thiagorochakl@gmail.com" target='blank'>
                <div className="infos">
                  <EnvelopeSimple size={32} weight="light" />
                  Email
                </div>
                <span>thiagorochakl@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/thiagoo-rocha/" target="blank">
                <div className="infos">
                  <LinkedinLogo size={32} weight="light" />
                  Linkedin
                </div>
                <span>Thiago Rocha</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thiagoo.mancha/" target="blank">
                <div className="infos">
                  <InstagramLogo size={32} weight="light" />
                  Instagram
                </div>
                <span>Thiagoo.mancha</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/*
      <div className="custom-shape-divider-top-1669399946">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div> 
      */}
    </section>
  );
};
