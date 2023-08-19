import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import { projects } from './../helpers/projectsList';
// import imgBig from './../img/projects/02-big.jpg';

const Project = () => {
  const { id } = useParams();
  const projectData = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{projectData.title}</h1>

          <img
            src={projectData.imgBig}
            alt={projectData.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>{projectData.skills}</p>
          </div>
          {projectData.gitHubLink && (
            <BtnGitHub link={projectData.gitHubLink} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Project;
