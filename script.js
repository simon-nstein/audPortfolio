var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: false,
    // Responsive breakpoints
    
    breakpoints: {
      // when window width is >= 940px
      930: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
    

    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  

  // get all the sections on the page
  const sections = document.querySelectorAll('section');

  // add an event listener to the window that listens for scroll events
  window.addEventListener('scroll', () => {
    let currentSection = '';

    // loop through all the sections to find the one that is currently in view
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    // get the navigation bar element
    const nav = document.getElementById('nav');

    // remove the nav-blue class from all navigation bar elements except for the one corresponding to the current section
    nav.querySelectorAll('.navs').forEach(navItem => {
      if (navItem.getAttribute('href') !== `#${currentSection}`) {
        navItem.classList.remove('nav-blue');
      }
    });

    // add the nav-blue class to the navigation bar element that corresponds to the current section
    const currentNav = document.querySelector(`a[href="#${currentSection}"]`);
    if (currentNav) {
      currentNav.classList.add('nav-blue');
    }
  });


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));