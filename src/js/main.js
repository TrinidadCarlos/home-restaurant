window.onload = () => {
  document.querySelector('#logoResponsive').addEventListener('click', responsive);
  const links = document.querySelectorAll('#navEnlaces li > a');
  links.forEach(l => l.addEventListener('click', responsive));
  aplicarObserver();
}

function responsive() {
  const body = document.querySelector('body');
  document.querySelector('#navEnlaces').classList.toggle('toggle');
  if (body.classList.contains('no-scroll')) {
    body.classList.remove('no-scroll');
    return;
  }
  body.classList.add('no-scroll');
}

function aplicarObserver(){
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav')

  const options = {
    rootMargin: '-96px'
  };
  const callback = function(entries){
    if (entries[0].isIntersecting) {
      nav.classList.remove('oscuro');
      return;
    }
    nav.classList.add('oscuro');
  }
  const observer = new IntersectionObserver(callback, options);
  observer.observe(header);
}

