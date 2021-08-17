  /* =========== MENU SHOW Y HIDDEN ============ */
  const navMenu = document.getElementById('nav_menu'),
        navToggle = document.getElementById('nav_toggle'),
        navClose = document.getElementById('nav_close')

  /* =========== MENU SHOW ============ */
  /* Validate if constant exists */
  if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
  }

    /* =========== MENU HIDDEN ============ */
  /* Validate if constant exists */
  if(navClose){
      navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu')
      })
  }

      /* =========== REMOVE MENU MOBILE ============ */
      const navLink = document.querySelectorAll('.nav-link')

      function linkAction(){
          const navMenu = document.getElementById('nav_menu')

          //when we click on each nav-link, we remove the show-menu class
          navMenu.classList.remove('show-menu')
      }
      navLink.forEach(n => n.addEventListener('click', linkAction))


  /* =========== ACCORDIAN SKILLS ============ */
  const skillsContent = document.getElementsByClassName('skills-content'),
        skillsHeader = document.querySelectorAll('.skills-header')

  function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i < skillsContent.length; i++) {
      skillsContent[i].className = 'skills-content skills-close'
    }
    if(itemClass === 'skills-content skills-close'){
      this.parentNode.className = 'skills-content skills-open'
    }
  }

  skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
  })

    /* =========== QUALIFICATION TABS ============ */
    const tabs = document.querySelectorAll('[data-target]'),
          tabContents = document.querySelectorAll('[data-content]')

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target);

      tabContents.forEach(tabContent => {
          tabContent.classList.remove('qualification-active')
      })
      target.classList.add('qualification-active')

      tab.forEach(tab => {
        tab.classList.remove('qualification-active')
      })
      tab.classList.add('qualification-active')
    })
  })

      /* =========== SERVICES MODAL ============ */
const modalViews = document.querySelectorAll('.services-modal'),
      modalBtns = document.querySelectorAll('.services-button'),
      modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function (modalClick){
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click',()=>{
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () =>{
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})

      /* =========== PORTFOLIO SWIPER ============ */
      let swiperPortfolio = new Swiper(".portfolio-container", {
        cssMode: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

            /* =========== TESTIMONIAL ============ */
            let swiperTestimonial = new Swiper(".testimonial-container", {
              loop: true,
              grabCursor: true,
              spaceBetween: 48,

              pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,

              },
              breakpoints: {
                568: {
                  slidesPerView: 2,
                }
              }
            });

        /* =========== SCROLL SRCTIONS ACTIVE LINK ============ */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav-menu a[href*=]' + sectionId + ']').classList.add('active-link')
    }
    else
    {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

        /* =========== CHANGE BACKGROUND HEADER ============ */
function scrollHeader() {
  const nav = document.getElementById('header')
  //When scroll is greater than 80 viewpoint height, add the scroll-header class
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

        /* =========== SHOW SCROLL TOP ============ */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    //When the scroll higher than 560 viewpoint height, add the show-scroll class to the a tag
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

        /* =========== DARK LIGHT THEME ============ */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that he interface has by validating the dark-theme class 
const getCurrentTheme = () => document.body.classList.contains('darkTheme') ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains('iconTheme') ? 'uil-moon' : 'uil-sun'

//We validate if the user chose a topic
if(selectedTheme){
  //if the validation is fulfilled, we ask what the issue was to know if we activated
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //add / remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(icontheme)

    //we save the theme and the icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

