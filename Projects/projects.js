window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader-hidden");
  });
});


const header = document.querySelector('.container-header');
const pushMenu = document.querySelector('i');
    pushMenu.addEventListener('click', function(){
    header.classList.toggle('hideHeader');    
})

function addClass(c) {
        document.getElementById("menu").classList.toggle(c);
    }


//заголовки
const square = document.getElementsByClassName('square');

for(let i = 0; i<square.length; i++){
  square[i].addEventListener('mouseenter', function(){
    this.classList.add("rubberBand");
    this.addEventListener("animationend", function(){
      this.classList.remove("rubberBand");
    }, false);
  })
}



//Buttons
    $(document).ready(function(){
        var $tabText = $('.text-wrapper');
        $('.circle').click(function(){
          $('.circle').removeClass('active');
          $(this).addClass('active');
          $tabText.hide();
          if($(this).find('span').hasClass('app')) { 
            $tabText.eq(0).fadeIn();
          } 
        });
      });


function app() {
    const buttons = document.querySelectorAll('.button')
    const cards = document.querySelectorAll('.card')

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('anime')
            } else {
                item.classList.remove('hide')
                item.classList.remove('anime')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
        })
    })

    cards.forEach((filtercard) => {
        filtercard.ontransitionend = function () {
            if (filtercard.classList.contains('anime')) {
                filtercard.classList.add('hide')
            }
        }
    })
}

app()



 particlesJS("particles-js", {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#aa65a4",
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
      value: 0.6,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#B1B2FF",
      opacity: 0.7,
      width: 0.5,
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
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
        enable: true,
        mode: "push" /*"grab"*/,
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 180,
        line_linked: {
          opacity: 0.6,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 8,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});















