import './projects.scss';
import utilities from '../../helpers/utilities';
import projectsData from '../../helpers/data/projectsData';

const displayAllProjects = () => {
  let domString = '<div id="projects-section">';
  projectsData.getAllProjects()
    .then((projects) => {
      projects.forEach((project) => {
        // eslint-disable-next-line no-use-before-define
        domString += projectCardBuilder(project);
      });
      domString += '</div>';
      utilities.printToDom('projectsPage', domString);
    })
    .catch((error) => console.error(error));
};

const projectCardBuilder = (project) => {
  let domString = '';
  if (project.available === true) {
    domString += `
    <div id="${project.id}" class="projectCard card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <a class="logo" href="${project.githubUrl}">
              <span class="is-medium">
                <i class="fa fa-2x fab fa-github"></i>
              </span>
            </a>
          </div>
          <div class="media-content">
            <a class="projectTitle" href="${project.url}"><p class="title is-4" id="project" style="color: rgb(84, 123, 196);">${project.title}</p></a>
            <p class="subtitle is-6 ">${project.technologiesUsed}</p>
          </div>
        </div>
        <p class="card-text">${project.description}</p>
        <div class="card-image">
          <figure class="image">
            <img src="${project.screenshot}"  alt="Project Screenshot" >
          </figure>
        </div>
      </div>
    </div>`;
  }
  return domString;
};

export default { displayAllProjects };
