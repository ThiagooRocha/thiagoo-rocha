import "./About.css";
import { useEffect, useState } from "react";

import { EducationModal } from "../../components/EducationModal/EducationModal";
import { ResumeModal } from "../../components/ResumeModal/ResumeModal";

//IMG
import Resume from "../../assets/Imgs/resume_ThiagoRocha.pdf";

export const About = () => {
  const [avatar, setAvatar] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/thiagoorocha");
      const data = await response.json();
      setAvatar(data.avatar_url);
    }

    fetchData();
  }, []);

  return (
    <section id="about">
      <div className="wrappler">
        <h2 className="title-section">About me</h2>
        <div className="container">
          <div className="left-side">
            <div className="box-img">
              <img src={avatar} alt="" />
            </div>
            <div className="btn-box">
              <EducationModal>
                <img
                  src="https://user-images.githubusercontent.com/100046543/201716977-f0d7f11a-8788-45ea-8826-77490cb9fe07.jpeg"
                  alt="Certificate"
                />
                <img
                  src="https://user-images.githubusercontent.com/100046543/206016017-d08c53f2-1718-46a0-a69d-eb6bde790376.png"
                  alt="Certificate"
                />
              </EducationModal>
              <ResumeModal>
                <embed src={Resume} type="application/pdf" />
              </ResumeModal>
            </div>
          </div>
          <div className="right-side">
            <div className="infos">
              <p>
                Olá! Meu nome é <span>Thiago</span>, ajudo a construir projetos
                e sonhos.
              </p>
              <p>
                Meu interesse no desenvolvimento web começou em 2021 quando
                baixei um aplicativo que ensinava a programar jogando. Depois
                disso fui me aprofundar mais na área de programação, começando
                com HTML e CSS me arriscava a criar projetos e logo depois tive
                contato com minha primeira linguagem que foi o JavaScript.
              </p>
              <p>
                Minha primeira experiência foi construido um site para um
                familiar meu, logo de começo percebi que faltava muita coisa
                para eu ficar satisfeito com o resultado final, então resolvi
                fazer um curso para seguir um caminho ate meus objetivos e não
                ficar perdido no que deveria fazer e aonde começar!.
              </p>
              <p>
                Atualmente estudo <span>React</span> e <span>Node.js</span>.
                Meus planos pro futuro é poder me aventurar no desenvolvimento
                mobile criando aplicativos ou até mesmo jogos.
              </p>
            </div>
            <div className="technologies">
              <h4>Tecnologias</h4>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>TailwindCss</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
