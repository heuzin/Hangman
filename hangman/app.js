const puezzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new HangmanGame('dog', 5)

puezzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuesses(guess)
    puezzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

getPuzzleFetch('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})