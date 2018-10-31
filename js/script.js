document.querySelector('.btn-hamburger').addEventListener('click', e=>{
  let right = document.querySelector('.navigation').style.right;
  if(right === '0px') {
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

const projects = (()=>{
  const listProjects = document.querySelector('.list-projects');
  const overlay = document.querySelector('.overlay');
  const hideOverlayBtn = document.querySelector('.btn-hide--overlay');

  hideOverlayBtn.addEventListener('click', ()=>{
    overlay.style.display = 'none';
  });

  listProjects.addEventListener('click', e=>{
    e.preventDefault();
    if(e.target.tagName === 'IMG') {
      overlay.style.display = 'block';     
    }
  });
})();