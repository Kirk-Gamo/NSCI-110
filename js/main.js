let dots = [];

function setup() {
  // const container = document.getElementById('home');
  // const canvas = createCanvas(container.clientWidth, container.clientHeight);
  // canvas.parent('home');

  createCanvas(windowWidth, windowHeight);

  // Create dots
  for (let i = 0; i < 150; i++) {
    dots.push({
      x: random(width),
      y: random(height),
      vx: random(-1, 1),
      vy: random(-1, 1)
    });
  }
}

function draw() {
  background('#09222E');

  stroke('white'); // Set the line color
  strokeWeight(0.5); // Set the line thickness

  // Draw a line from the top-left to the bottom-right of the canvas
  // line(0, 0, width, height);

  // Draw dots and lines
  for (let i = 0; i < dots.length; i++) {
    fill(255);
    noStroke();
    ellipse(dots[i].x, dots[i].y, 2); // Draw dot

    // Draw lines between close dots
    for (let j = i + 1; j < dots.length; j++) {
      let d = dist(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
      if (d < 100) {
        stroke(255, map(d, 0, 100, 255, 0));
        line(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
      }
    }

    // Move dots
    dots[i].x += dots[i].vx;
    dots[i].y += dots[i].vy;

    // Wrap around screen
    if (dots[i].x < 0) dots[i].x = width;
    if (dots[i].x > width) dots[i].x = 0;
    if (dots[i].y < 0) dots[i].y = height;
    if (dots[i].y > height) dots[i].y = 0;
  }
}

var swiper = new Swiper(".student-row", {
  spaceBetween: 90,
  // loop: true, 
  // centeredSlides: true,
  // autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: true,
  // },
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 4,
    }
  },
});

//header background change on scroll
let header = document.querySelector('header');
let home = document.querySelector('.home');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > home.clientHeight - 50);
});


/*=============== Scroll Sections Active Link ================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset  && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active'); 
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
  }