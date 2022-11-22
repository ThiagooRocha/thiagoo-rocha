import "./Projects.css";
import { CardProject } from "../../components/CardProject/CardProject";

import { useState, useEffect } from "react";

//IMG
import ThiagooRochaImg from "../../assets/Imgs/img_thiagoo.rocha.png";
import FeedReviewImg from "../../assets/Imgs/img_feed-review.png";
import DesignSystemImg from "../../assets/Imgs/img_design-system.png";

export const Projects = () => {
  const [repos, setRepos] = useState<Repos[]>([]);
  const [moreProjects, setMoreProjects] = useState<boolean>(false);

  interface Repos {
    id: number;
    name: string;
    description: string;
    html_url: string;
    languages_url?: string;
  }

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(
        "https://api.github.com/users/ThiagooRocha/repos"
      );
      const dataRepos = await response.json();

      const repo = dataRepos.map((repo: Repos) => {
        const infos = {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
        };

        return infos;
      });

      setRepos(repo);
    }
    fetchRepos();
  }, []);

  function filterRepos(...repo: string[]) {
    const filter = repos.filter((repos) => {
        return (
          repos.name !== repo[0] &&
          repos.name !== repo[1] &&
          repos.name !== repo[2] &&
          repos.name !== repo[3]
        );
      });

    return filter;
  }

  return (
    <section id="projects">
      <div className="wrappler">
        <h2 className="title-section">Projects</h2>

        <div className="cards">
          <CardProject
            key={1}
            name={"Thiagoo-Rocha"}
            description={
              "Meu portfólio - Criado com o intuito de apresentar um pouco sobre mim e compartilhar meus projetos. :) "
            }
            html_url={"https://github.com/ThiagooRocha/thiagoo.rocha.com"}
            img={ThiagooRochaImg}
            tech={["React", "Typescript"]}
          />
          <CardProject
            key={2}
            name={"Feed-Review"}
            description={
              "Entendendo como funciona o firebase, utilizando o conceito de a autenticação.E também o json-server para armazenar os posts do usuário."
            }
            html_url={"https://github.com/ThiagooRocha/feed-review"}
            img={FeedReviewImg}
            tech={["React", "Javascript", "Firebase"]}
          />
          <CardProject
            key={3}
            name={"Design-System"}
            description={
              "Projeto criado no bootcamp da Rocketseat sobre design-system, do Figma ao código, utilizando storybook para criar uma documentação dos principais componentes da página."
            }
            html_url={"https://github.com/ThiagooRocha/Design-system"}
            img={DesignSystemImg}
            tech={["React", "Typescript", "Storybook", "TailwindCss"]}
          />
        </div>

        <div className={moreProjects ? "more-cards active" : "more-cards"}>
          {repos &&
            filterRepos(
              "feed-review",
              "Design-system",
              "thiagoo-rocha",
              "ThiagooRocha"
            ).map((repo, index) => {

              const delay = `${index + 1}00ms`
              return (
                <a href={repo.html_url} target="blank" key={repo.id} style={{'--delay': delay} as React.CSSProperties}>
                  <div className="card">
                    <h2>{repo.name}</h2>
                    <p>{repo.description}</p>
                  </div>
                </a>
              );
            })}
        </div>

        <div className="box-btn">
          {moreProjects ? (
            <button onClick={() => setMoreProjects(!moreProjects)}>
              ver menos
            </button>
          ) : (
            <button onClick={() => setMoreProjects(!moreProjects)}>
              ver mais
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
