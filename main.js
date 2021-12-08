// MOVE SANTA

const santa_move = document.querySelector('div.santa');
const santaMove = () => {
    santa_move.classList.toggle('move')
}
santaMove()
setInterval(santaMove, 10000)