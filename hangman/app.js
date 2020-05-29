// Primitive value: not objects -> string, number, boolean, null, undefined

// Objext: myObject --> Obecjt.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction --> Function.prototype --> Object.prototype --> null

// HTTP (Hypertext Transfer Porotocol)
// Request - What do we want to do
// Response - What was actually done

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

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(`Error: ${err}`)
})

getCountry('MX').then((country) => {
    console.log(country.name)
}, (err) => {
    console.log(`Error: ${err}`)
})

fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch the puzzle.')
    }
}).then((data) => {
    console.log(data.puzzle)
}).catch((error) => {
    console.log(error)
})

getPuzzleFetch('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

getCountryFetch('BR').then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})