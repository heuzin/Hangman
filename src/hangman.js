class HangmanGame {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
        const finished = this.word.every((letter) => {
            return this.guessedLetters.includes(letter)
        })
    
        // let finished = true
    
        // this.word.forEach((letter) => {
        //     if (this.guessedLetters.includes(letter)) {
    
        //     } else {
        //         finished = false
        //     }
        // })
    
        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else {
            return `Great work, you guessed the word`
        }
    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' '){
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
    
        return puzzle
    }
    makeGuesses(guess) {
        guess = guess.toLowerCase()

        if (this.status !== 'playing') {
            return
        }
    
        if (!this.guessedLetters.includes(guess)) {
            this.guessedLetters.push(guess)
        }
        
        if (!this.guessedLetters.includes() && !this.word.includes(guess)) {
            this.remainingGuesses--
        }
    
        this.calculateStatus()
    }
}

export { HangmanGame as default }