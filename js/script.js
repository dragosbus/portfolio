const dataProject = [
  {
    title: 'Dashboard',
    image: 'dist/img/work/dashboard.jpg',
    description: 'Dashboard project',
    techs: ['HTML', 'CSS', 'jQuery', 'Chart.js', 'AJAX', 'SASS'],
    link: 'https://dragosbus.github.io/webdash/',
    github: 'https://github.com/dragosbus/webdash'
  },
  {
    title: 'Weather',
    image: 'dist/img/work/meteo.jpg',
    description: 'Want to know what the weather is like outside? You just look out the window, or check out this app!',
    techs: ['HTML', 'CSS', 'JavaScript', 'AJAX'],
    link: 'https://dragosbus.github.io/freecodecamp/intermediate_projects/weather/',
    github: 'https://github.com/dragosbus/freecodecamp/tree/master/intermediate_projects/weather'
  },
  {
    title: 'The Pig Game',
    image: 'dist/img/work/pig.jpg',
    description: 'Bring a friend and try your luck.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://dragosbus.github.io/pig-game/',
    github: 'https://github.com/dragosbus/pig-game'
  },
  {
    title: 'Random Quote',
    image: 'dist/img/work/quote.jpg',
    description: 'Random Quote project',
    techs: ['HTML', 'CSS', 'JavaScript', 'AJAX'],
    link: 'https://dragosbus.github.io/freecodecamp/intermediate_projects/random_quote/',
    github: 'https://github.com/dragosbus/freecodecamp/tree/master/intermediate_projects/random_quote'
  },
  {
    title: 'Restaurant Review',
    image: 'dist/img/work/restaurant.jpg',
    description: 'Restaurant Review project is the result of Mobile Web Specialist NanoDegree from Udacity.',
    techs: ['HTML', 'CSS', 'JavaScript', 'Fetch API', 'IndexDB', 'Service Worker'],
    link: 'https://dragosbus.github.io/restaurant_review/',
    github: 'https://github.com/dragosbus/restaurant_review'
  },
  {
    title: 'Tic Tac Toe',
    image: 'dist/img/work/xo.jpg',
    description: 'Play a game of Tic Tac Toe with the worst AI=).Will become better in the future.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://dragosbus.github.io/freecodecamp/advanced_projects/tic-tac-toe/',
    github: 'https://github.com/dragosbus/freecodecamp/tree/master/advanced_projects/tic-tac-toe'
  }
];

document.querySelector('.btn-hamburger').addEventListener('click', e => {
  let right = document.querySelector('.navigation').style.right;
  if (right === '0px') {
    document.querySelector('.navigation').style.right = '-10000px';
    document.querySelector('.btn-hamburger').style.transform = 'translate3d(0, 0, 0)';
    document.querySelector('.logo').style.transform = 'translate3d(0, 0, 0)';
    document.querySelector('.intro').style.transform = 'translate3d(0, 0, 0)';
  } else {
    document.querySelector('.navigation').style.right = 0;
    document.querySelector('.btn-hamburger').style.transform = 'translate3d(-200px, 0, 0)';
    document.querySelector('.logo').style.transform = 'translate3d(-100px, 0, 0)';
    document.querySelector('.intro').style.transform = 'translate3d(-100px, 0, 0)';
  }
});

const projects = (() => {
  const listProjects = document.querySelector('.list-projects');
  const overlay = document.querySelector('.overlay');
  const project = document.querySelector('.project-details');
  const hideOverlayBtn = document.querySelector('.btn-hide--overlay');
  const projects = document.querySelectorAll('.list-projects a');
  const arrowsDiv = document.querySelector('.arrows');

  const lengthAllProjects = [...projects].length;
  let currentProject;

  //return details project clicked component
  const getProject = project => {
    return `
      <div>
        <img src=${project.image}>
        <h4>${project.title}</h4>
      </div>
    `;
  };

  //get the index of the project cliked
  const getIndexProjectClicked = target => {
    return [...projects].indexOf(target.parentNode);
  };

  const changeProject = (currentProjectIndex, btn) => {
    if (btn === 'next') {
      return currentProjectIndex < lengthAllProjects - 1 ? currentProjectIndex + 1 : 0;
    } else if (btn === 'prev') {
      return currentProjectIndex > 0 ? currentProjectIndex - 1 : lengthAllProjects - 1;
    }
  };

  arrowsDiv.addEventListener('click', e => {
    let btn = e.target.value || e.target.alt.slice(0, 4);
    currentProject = changeProject(currentProject, btn);
    console.log(currentProject);
    project.innerHTML = getProject(dataProject[currentProject]);
  });

  //hide the overlay
  hideOverlayBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  listProjects.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.tagName === 'IMG') {
      currentProject = getIndexProjectClicked(e.target);
      project.innerHTML = getProject(dataProject[currentProject]);
      overlay.style.display = 'block';
    }
  });
})();
