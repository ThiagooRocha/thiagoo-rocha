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
      
    </section>
  );
};
