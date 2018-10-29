document.querySelector('.btn-hamburger').addEventListener('click', e=>{
  let right = document.querySelector('.navigation').style.right;
  if(right === '0px') {
    document.querySelector('.navigation').style.right = '-10000px';
  } else {
    document.querySelector('.navigation').style.right = 0;
  }
});