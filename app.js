


function toggleAnswer(id) {
  const content = document.getElementById('answer-' + id);
  const arrow = document.getElementById('arrow-' + id);
  content.classList.toggle('hidden');
  arrow.classList.toggle('rotate-180');

  
}

const click= document.getElementById('click');
const btn = document.getElementById('btn');
const show = document.getElementById('show');
let a=1;

btn.addEventListener('click', function() {
show.style.display = 'flex';
});

click.addEventListener('click', function() {
    show.style.display = 'none';
    show.style.transition = '';
});








gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);
