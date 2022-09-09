

const links = document.querySelectorAll('.header__nav-link');
links.forEach(item => {
  item.addEventListener('click', () => {
    const el = document.getElementById(item.getAttribute('data-header-link'));
    el.scrollIntoView({behavior: "smooth", block:'center'});
  })
})


const mainLinks = document.querySelectorAll('.main-link');
const titleSec = document.querySelectorAll('.tab-links');
const sec = document.querySelectorAll('.tab-pane');

for (let i = 0; i < mainLinks.length; i++) {
  mainLinks[i].addEventListener('click', function(e){
    e.preventDefault();
    const el = document.getElementById(mainLinks[i].getAttribute('data-main-link'));
    el.scrollIntoView({behavior: "smooth", block:'center' });
    for (let k = 0; k < titleSec.length; k++) {
      titleSec[k].classList.remove('active');
      sec[k].classList.remove('active');
    }
    titleSec[i].classList.add('active');
    sec[i].classList.add('active');
    sec[i].classList.add('in');
  })
  
}

