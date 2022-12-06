import "./CardProject.css";

//IMG
import DefaultImg from "../../assets/Imgs/default_img.png"

interface CardProjectProps {
  name: string;
  description: string;
  html_url: string;
  img?: string;
  tech?: string[];
}

export const CardProject = ({name, description, html_url, img, tech}: CardProjectProps) => {

  return (
    <div className="card-project">
      <div className="infos">
        <h2>{name}</h2>
        <p>{description}</p>
        <ul>
          {tech &&
            tech.map((element) => <li key={element}>{element}</li>)}
        </ul>
      </div>
      <a href={html_url} target="blank">
        <img src={img ? img : DefaultImg} alt={name} />
      </a>
    </div>
  );
};
