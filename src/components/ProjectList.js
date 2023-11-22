import ProjectItem from "../components/ProjectItem";
import style from "../styles/project.module.scss";

const ProjectList = ({ projectList, current }) => {
  return (
    <div className={style.container}>
      {projectList.map((project) => (
        <ProjectItem
          project={project}
          key={project.id}
          current={current === project.id ? "active" : "inactive"}
        />
      ))}
    </div>
  );
};

export default ProjectList;
