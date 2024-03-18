let cards = document.querySelectorAll(".card")
let isFlippedCard = false
let lockBoard = false
let firstCard, secondCard
[...cards].forEach(card=>{
    let random = Math.floor(Math.random()*12)
    card.style.order = random
})
function flipCard() {
    let item = event.target.parentElement
    if (lockBoard) {
        return lockBoard
    }
    if (event.target.parentElement === firstCard) {
        return firstCard
    }

    item.classList.add("flip")

    if (!isFlippedCard) {
        isFlippedCard = true
        firstCard = event.target.parentElement
        return
    }
    secondCard = event.target.parentElement
    firstCard.dataset.ed === secondCard.dataset.ed ? disableCards() : undflipCards()
}


function disableCards() {
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)
    resetBoard()
}

function resetBoard() {
    [isFlippedCard,lockBoard] = [false,false]
    [firstCard, secondCard] = [null, null]
}
function undflipCards() {
    lockBoard = true
    setTimeout(() => {
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        resetBoard()
    }, 1000)}

cards.forEach(card => card.addEventListener("click", flipCard))