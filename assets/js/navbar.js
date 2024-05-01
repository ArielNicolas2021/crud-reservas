let menuBtn = document.getElementById('menuBtn')
let navbarItems = document.getElementById('navbarItems')

menuBtn.addEventListener('click', () => {
    navbarItems.classList.toggle('open-navbar')
})