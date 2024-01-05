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

// Scroll to Bottom
const scrollToBottomButton = document.querySelector('#scroll-to-bottom')

scrollToBottomButton.addEventListener('click', () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  })
})

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    html.classList.remove('dark')
    localStorage.theme = 'light'
  }
})

// pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  darkToggle.checked = true
} else {
  darkToggle.checked = false
}
