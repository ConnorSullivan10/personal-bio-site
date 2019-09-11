console.log('Portfolio, here we come!');

const projects = [
    {
    title: "Cool Project", 
    screenshot: "https://imgflip.com/s/meme/Cool-Obama.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }
]

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint;
};



const createProjectCards = (projectsArr) => {
  let domString = ''
  for (let i = 0; i < projectsArr.length; i++) {
      const project = projectsArr[i]
      domString += `
          <div class="projects-card">
              <h2>${project.title}</h2>
              <img src=${project.screenshot}/>
              <h3>${project.description}</h3>
              <h3>${project.technologiesUsed}</h3>
              <h4>${project.url}
              <h4>${project.githubUrl}</h4>
          </div>
      `
      const availableProjectCards = []
              for (let i = 0; i < projects.length; i ++) {
                  const project = projects[i]
                  if (project.available === true) {
                      availableProjectCards.push(project)
                  }
  
    }
  printToDom(domString, 'projectsPage')
}
};

const init = () => {
  createProjectCards(projects)};

  init();

  const buttonFilter = () => {
  document.getElementsByTagName("button").addEventListener("click", (event) => {
    if (event.target.id === "navToBio") {
    technologiesPage.setAttribute('style', 'display:none');
    projectsPage.setAttribute('style', 'display:none');
  } else if (event.target.id === "navToTechnologies") {
    bioPage.setAttribute('style', 'display:none');
    projectsPage.setAttribute('style', 'display:none');
  } else (event.target.id === "navToProjects") {
    technologiesPage.setAttribute('style', 'display:none');
    bioPage.setAttribute('style', 'display:none');
  } 
});
}
 /* let bioButton = document.getElementById("navToBio");
  let technologiesButton = document.getElementById("navToTechnologies");
  let projectsButton = document.getElementById("navToProjects");

  bioButton.addEventListener('click', (e) => {
    technologiesPage.setAttribute('style', 'display:none');
    projectsPage.setAttribute('style', 'display:none');
  });

  technologiesButton.addEventListener('click', (e) => {
    bioPage.setAttribute('style', 'display:none');
    projectsPage.setAttribute('style', 'display:none');
  });

  projectButton.addEventListener('click', (e) => {
    technologiesPage.setAttribute('style', 'display:none');
    bioPage.setAttribute('style', 'display:none');
  });
  
  }; */