import "./CardProject.css";

//IMG
import DefalutImg from "../../assets/Imgs/default_img.png"

interface CardProjectProps {
  name: string;
  description: string;
  html_url: string;
  img?: string;
  tech?: string[];
}

export const CardProject = (props: CardProjectProps) => {
  const default_img = "../../public/default_img.png";

  return (
    <div className="card-project">
      <div className="infos">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <ul>
          {props.tech &&
            props.tech.map((element) => <li key={element}>{element}</li>)}
        </ul>
      </div>
      <a href={props.html_url} target="blank">
        <img src={props.img ? props.img : default_img} alt={props.name} />
      </a>
    </div>
  );
};
