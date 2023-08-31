// navbar fixed
// keep track of previous scroll position
let prevScrollPos = window.pageYOffset

window.addEventListener('scroll', function () {
  // current scroll position
  const currentScrollPos = window.pageYOffset

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector('header').classList.add('navbar-fixed')
  } else {
    // user has scrolled down
    document.querySelector('header').classList.remove('navbar-fixed')
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos
})
// window.onscroll = () => {
//   const header = document.querySelector('header')
//   const fixedNav = header.offsetTop

//   if (window.pageYOffset > fixedNav) {
//     header.classList.add('navbar-fixed')
//   } else {
//     header.classList.remove('navbar-fixed')
//   }
// }

// hambuger
const hambuger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('hamburger-active')
  navMenu.classList.toggle('hidden')
})
