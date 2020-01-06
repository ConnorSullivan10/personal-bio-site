import $ from 'jquery';
import './navbar.scss';

const displayHome = () => {
  $(document).ready(() => {
    $('#technologiesPage').hide();
  });
  $('#navToHome').on('click', () => {
    $('#homePage').show();
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
  });
};

const displayBio = () => {
  $('#navToBio').on('click', () => {
    $('#bioPage').show();
    $('#homePage').hide();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
  });
};

const displayTechnologies = () => {
  $('#navToTechnologies').on('click', () => {
    $('#technologiesPage').show();
    $('#homePage').hide();
    $('#bioPage').hide();
    $('#projectsPage').hide();
  });
};

const displayProjects = () => {
  $('#navToProjects').on('click', () => {
    $('#projectsPage').show();
    $('#homePage').hide();
    $('#bioPage').hide();
    $('#technologiesPage').hide();
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
  displayTechnologies();
  displayProjects();
  burgerFunction();
};

export default { attachNavbarEvents };
