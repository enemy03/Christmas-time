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


// SECTION EVENTS

const snowflake = document.querySelectorAll('section.events .wrap_img');
const bubble = document.querySelector('.wrap_christmas_bomb')
const sectionEvents = document.querySelector('section.events');

window.addEventListener('scroll', () => {
    const sizeOntop = window.scrollY;

    if (sizeOntop > sectionEvents.offsetTop + sectionEvents.clientHeight / 1.5 - window.innerHeight) {
        snowflake.forEach(s => {
            s.classList.add('show')
        });
    }

    if (sizeOntop > sectionEvents.offsetTop + sectionEvents.clientHeight / 1.5 - window.innerHeight) {
        bubble.classList.add('show')
    }

})



// SECTION GIFTS


const gift_1 = document.querySelector('.wrap_gifts .first');
const aside_1 = document.querySelector('aside.gift_1');
const btnCloseAside = document.querySelector('aside.gift_1 button');
const img_1 = document.querySelector('aside.gift_1 .wrap_img');
const p_1 = document.querySelector('aside.gift_1 p');
const btn_1 = document.querySelector('aside.gift_1 button');
const gift_2 = document.querySelector('.wrap_gifts .second');
const aside_2 = document.querySelector('aside.gift_2');
const img_2 = document.querySelector('aside.gift_2 .wrap_img');
const p_2 = document.querySelector('aside.gift_2 p');
const btn_2 = document.querySelector('aside.gift_2 button');
const btnCloseAside_2 = document.querySelector('aside.gift_2 button');
const gift_3 = document.querySelector('.wrap_gifts .third');
const aside_3 = document.querySelector('aside.gift_3');
const btnCloseAside_3 = document.querySelector('aside.gift_3 button');
const img_3 = document.querySelector('aside.gift_3 .wrap_img');
const p_3 = document.querySelector('aside.gift_3 p');
const btn_3 = document.querySelector('aside.gift_3 button');



gift_1.addEventListener('click', () => {
    gift_1.classList.add('active');
    gift_1.classList.remove('move')
    aside_1.classList.add('active')
    aside_1.classList.add('show')
    img_1.classList.add('active')
    p_1.classList.add('active')
    btn_1.classList.add('active')


})

btnCloseAside.addEventListener('click', () => {
    gift_1.classList.remove('active');
    aside_1.classList.remove('active')
    aside_1.classList.remove('show')
    img_1.classList.remove('active')
    p_1.classList.remove('active')
    btn_1.classList.remove('active')
    gift_1.classList.add('move')
});


gift_2.addEventListener('click', () => {
    gift_2.classList.add('active');
    aside_2.classList.add('active');
    aside_2.classList.add('show');
    img_2.classList.add('active');
    p_2.classList.add('active');
    btn_2.classList.add('active');
    gift_2.classList.remove('move')
});

btnCloseAside_2.addEventListener('click', () => {
    gift_2.classList.remove('active');
    aside_2.classList.remove('active')
    aside_2.classList.remove('show')
    img_2.classList.remove('active')
    p_2.classList.remove('active')
    btn_2.classList.remove('active')
    gift_2.classList.add('move')
})


gift_3.addEventListener('click', () => {
    gift_3.classList.add('active');
    aside_3.classList.add('active');
    aside_3.classList.add('show');
    img_3.classList.add('active');
    p_3.classList.add('active');
    btn_3.classList.add('active');
    gift_3.classList.remove('move')
})

btnCloseAside_3.addEventListener('click', () => {
    gift_3.classList.remove('active');
    aside_3.classList.remove('active')
    aside_3.classList.remove('show')
    img_3.classList.remove('active')
    p_3.classList.remove('active')
    btn_3.classList.remove('active')
    gift_3.classList.add('move')
})