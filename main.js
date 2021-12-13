// MOVE SANTA

const santa_move = document.querySelector('div.santa');
const santaMove = () => {
    santa_move.classList.toggle('move')
}
santaMove()
setInterval(santaMove, 10000)



// MENU BURGER

const icon_add = document.querySelector('.menu_burger');
const icon_remove = document.querySelector('.icon_remove');
const aside_menu = document.querySelector('aside.menu');
const section_logo = document.querySelector('section.logo');

icon_add.addEventListener('click', () => {
    aside_menu.classList.add('active')
    section_logo.classList.add('active')
    icon_add.classList.add('active')

})

icon_remove.addEventListener('click', () => {
    aside_menu.classList.remove('active')
    section_logo.classList.remove('active')
    icon_add.classList.remove('active')
})


// SECTION WELCOME

const img_santa = document.querySelector('.img_santa')

window.addEventListener('scroll', () => {
    const sizeOntop = window.scrollY;

    if (sizeOntop > img_santa.offsetTop + img_santa.clientHeight - window.innerHeight) {
        img_santa.classList.add('active')
    }

    const increaseSanta = () => {
        img_santa.classList.add('move')
    }

    setTimeout(increaseSanta, 2000)
})