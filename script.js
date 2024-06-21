const cube = document.getElementById('cube');
let isHovering = false;

function rotateCube() {
    if (!isHovering) {
        cube.style.transform += ` rotateX(1deg) rotateY(1deg)`;
    }
}

setInterval(rotateCube, 20);


cube.addEventListener('mouseenter', () => {
    isHovering = true;
});

cube.addEventListener('mouseleave', () => {
    isHovering = false;
});


const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left=e.pageX + 'px';
   cursor.style.top=e.pageY + 'px';
})



window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var targetElement = document.querySelector('.animated-paragraph');
  var targetPosition = targetElement.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (targetPosition < windowHeight / 1.5) { 
    targetElement.style.opacity = 1;
  } else {
    targetElement.style.opacity = 0;
  }
});


const arrows = document.querySelectorAll('.arrow');

arrows.forEach((arrow, index) => {
  animateArrow(arrow, index);
});

function animateArrow(arrow, index) {
  setInterval(() => {
    arrow.style.transform = 'translateY(5px)';
    setTimeout(() => {
      arrow.style.transform = 'translateY(0)';
    }, 300);
  }, 600 + index * 100);
}