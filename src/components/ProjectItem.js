import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Write } from "../assets/icons/write.svg";
import { ReactComponent as Web } from "../assets/icons/web.svg";
import { ReactComponent as Github } from "../assets/icons/github.svg";
import style from "../styles/project.module.scss";
import moco from "../assets/imgs/moco.png";
import diaryBoard from "../assets/imgs/diary-board.png";
import thanksClip from "../assets/imgs/thanksClip.png";
import gendata from "../assets/imgs/gendata.png";

const ProjectItem = ({ project, current }) => {
  const [displayClass, setDisplayClass] = useState(current);

  useEffect(() => {
    let timer;
    if (current === "active") {
      setDisplayClass("active");
      timer = setTimeout(() => {
        setDisplayClass("visible");
      }, 400);
    } else {
      setDisplayClass("inactive");
      timer = setTimeout(() => {
        setDisplayClass("hidden");
      }, 400);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [current]);

  const images = {
    moco: moco,
    diaryBoard: diaryBoard,
    thanksClip: thanksClip,
    gendata: gendata,
  };

  return (
    <article className={`${style.container} ${style[displayClass]}`}>
      <div className={style["container-top"]}>
        <img src={images[project.img]} alt={project.img} />
      </div>
      <div className={style["container-bottom"]}>
        <div className={style["container-bottom__top"]}>
          <div className={style["tags"]}>
            {project.tags.map((tag) => (
              <span key={tag.id}>{tag.value}</span>
            ))}
          </div>
          <h3 className={style["title"]}>{project.title}</h3>
          <div className={style["info"]}>{project.info}</div>
        </div>
        <p className={style["content"]}>{project.content}</p>
        <div className={style["button"]}>
          {project.github && (
            <Link
              className={style["button--github"]}
              to={project.github}
              target="_blank"
            >
              <span>
                <Github />
              </span>
              <span>GitHub</span>
            </Link>
          )}
          {project.note && (
            <Link
              className={style["button--write"]}
              to={project.note}
              target="_blank"
            >
              <span>
                <Write />
              </span>
              <span>회고록</span>
            </Link>
          )}
          {project.demo && (
            <Link
              className={style["button--web"]}
              to={project.demo}
              target="_blank"
            >
              <span>
                <Web />
              </span>
              <span>DEMO</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
