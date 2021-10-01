const burger = document.querySelector('#burger')
const ul = document.querySelector('nav ul')

burger.addEventListener('click', () => {
    ul.classList.toggle('show')
})