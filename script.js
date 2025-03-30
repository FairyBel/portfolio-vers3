AOS.init();
gsap.to(".str", {
  text: "Fullstack-developer...coding...creator.",

  duration: 3,
  repeat: 1,
  repeatDelay: 1.3,
  ease: "power1.in",
  yoyo: true,
  delay: 2,
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader-hidden");
  });
});

const header = document.querySelector(".container-header");
const pushMenu = document.querySelector("i");
pushMenu.addEventListener("click", function () {
  header.classList.toggle("hideHeader");
});

function addClass(c) {
  document.getElementById("menu").classList.toggle(c);
}

//Музыка

const buttonMusic = document.querySelector(".btn-music");
const audio = document.querySelector("#myAudio");
const textIcon = document.querySelector(".icon-text");

buttonMusic.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    textIcon.textContent = "ON";
  } else {
    audio.pause();
    textIcon.textContent = "OFF";
  }
});

//заголовки
const square = document.getElementsByClassName("square");

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("mouseenter", function () {
    this.classList.add("rubberBand");
    this.addEventListener(
      "animationend",
      function () {
        this.classList.remove("rubberBand");
      },
      false
    );
  });
}

// слайд проекты

const items = document.querySelectorAll(".items");
items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    removeFocus();
    item.classList.add("selected");
  });

  removeFocus = () => {
    items.forEach((item) => {
      item.classList.remove("selected");
    });
  };
});


//Sertificats//
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const photos = [
  'https://cdn.glitch.global/ffa93e22-ff5b-4161-881c-9f958978fc18/sert-html-css3.jpg?v=1666468143791',
  'https://cdn.glitch.global/ffa93e22-ff5b-4161-881c-9f958978fc18/sert-frontend.png?v=1666878817815',
  'https://cdn.glitch.global/ffa93e22-ff5b-4161-881c-9f958978fc18/sert-bootstrap.jpg?v=1666468074231',
  'https://cdn.glitch.global/ffa93e22-ff5b-4161-881c-9f958978fc18/sert-gsap.png?v=1666468102900',
  
]
const photos2 = [
  'https://cdn.glitch.global/ffa93e22-ff5b-4161-881c-9f958978fc18/sert-frontend.png?v=1666878817815',
  'https://cdn.glitch.global/ffa93e22-ff5b-4161-881c-9f958978fc18/sert-bootstrap.jpg?v=1666468074231',
  'https://cdn.glitch.global/ffa93e22-ff5b-4161-881c-9f958978fc18/sert-gsap.png?v=1666468102900',
  'https://cdn.glitch.global/ffa93e22-ff5b-4161-881c-9f958978fc18/sert-html-css3.jpg?v=1666468143791',
  
]
const photos3 = [
  'https://cdn.glitch.global/ffa93e22-ff5b-4161-881c-9f958978fc18/sert-bootstrap.jpg?v=1666468074231',
  'https://cdn.glitch.global/ffa93e22-ff5b-4161-881c-9f958978fc18/sert-gsap.png?v=1666468102900',
  'https://cdn.glitch.global/ffa93e22-ff5b-4161-881c-9f958978fc18/sert-html-css3.jpg?v=1666468143791',
  'https://cdn.glitch.global/ffa93e22-ff5b-4161-881c-9f958978fc18/sert-frontend.png?v=1666878817815',
  
]
let i = 0;
next.addEventListener("click", () => {
  i += 3;
  if (i > photos.length - 1) {
    i = 0;
  }
  document.querySelector(".pictures").src = photos[i];
  document.querySelector(".pictures2").src = photos2[i];
  document.querySelector(".pictures3").src = photos3[i];
});

prev.addEventListener("click", () => {
  i -= 3;
  if (i < 0) {
    i = photos.length - 1;
  }
  document.querySelector(".pictures").src = photos[i];
  document.querySelector(".pictures2").src = photos2[i];
  document.querySelector(".pictures3").src = photos3[i];
});
  


particlesJS("particles-js", {
  particles: {
    number: {
      value: 92,
      density: {
        enable: true,
        value_area: 631.3280775270874,
      },
    },
    color: {
      value: "#784BA0",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
