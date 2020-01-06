import $ from 'jquery';
import './navbar.scss';

const displayHome = () => {
  $('#navToHome').on('click', () => {
    $('#homePage').show();
    $('#bioPage').hide();
    $('#projectsPage').hide();
  });
};

const displayBio = () => {
  $('#navToBio').on('click', () => {
    $('#bioPage').show();
    $('#homePage').hide();
    $('#projectsPage').hide();
  });
};

const displayProjects = () => {
  $('#navToProjects').on('click', () => {
    $('#projectsPage').show();
    $('#homePage').hide();
    $('#bioPage').hide();
  });
};

const burgerFunction = () => {
  $('.navbar-burger').on('click', () => {
    $('navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });
};

const attachNavbarEvents = () => {
  displayHome();
  displayBio();
  displayProjects();
  burgerFunction();
};

export default { attachNavbarEvents };
