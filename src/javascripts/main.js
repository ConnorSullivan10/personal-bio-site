import 'bootstrap';
import 'bulma';
import '../styles/main.scss';
import navbar from './components/Navbar/navbar';
import projects from './components/Projects/projects';

const init = () => {
  navbar.attachNavbarEvents();
  projects.displayAllProjects();
};

init();
