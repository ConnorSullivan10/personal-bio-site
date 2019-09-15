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

  const eventButtons = () => {
    const buttons = document.getElementsByTagName("button");
    for (i=0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', (event) => {
        const buttonType = event.target.id;
        event.preventDefault();
        if (buttonType === "navToBio") {
          technologiesPage.setAttribute('style', 'display:none');
          projectsPage.setAttribute('style', 'display:none');
          bioPage.setAttribute('style', 'display:block')
        } else if (buttonType === "navToTechnologies") {
          bioPage.setAttribute('style', 'display:none');
          projectsPage.setAttribute('style', 'display:none');
          technologiesPage.setAttribute('style', 'display:block')
        } else if (buttonType === "navToProjects") {
          technologiesPage.setAttribute('style', 'display:none');
          bioPage.setAttribute('style', 'display:none');
          projectsPage.setAttribute('style', 'display:block')
          createProjectCards(projects);
        } 
      })
  }
};

window.addEventListener('click', eventButtons);

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