class Hangman {
    constructor(words) {
      this.words = [...words];
      this.secretWord = this.pickWord()
      this.letters = []
      this.guessedLetters = ''
      this.errorsLeft = 10
    }
  
    pickWord() {
      let randomNumber = Math.floor(Math.random()*this.words.length)
        return this.words[randomNumber]
    }
  
    checkIfLetter(keyCode) {
      return keyCode >= 65 && keyCode <= 90
    }
  
    checkClickedLetters(letter) {
      if (this.letters.includes(letter)) {
        return false;
      } else {
        return true;
      }
    }
  
    addCorrectLetter(letter) {
      return this.guessedLetters += letter
    }
  
    addWrongLetter(letter) {
      this.errorsLeft -= 1
        this.letters.push(letter)
    }
  
    checkGameOver() {
      if (this.errorsLeft == 0 ){
        return true
    } else {
        return false
    }
    }
  
    checkWinner() {
      for (let i = 0; i < this.secretWord.length; i++){
        if (!this.guessedLetters.includes(this.secretWord[i])){
          return false
        }
        else{
          return true
        }
      }
  
    }
  }
  
  let hangman;
  
  const startGameButton = document.getElementById('start-game-button');
  
  if (startGameButton) {
    startGameButton.addEventListener('click', event => {
      hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
  
      // HINT (uncomment when start working on the canvas portion of the lab)
      hangman.secretWord = hangman.pickWord();
      hangmanCanvas = new HangmanCanvas(hangman.secretWord);
      hangmanCanvas.createBoard()
    });
  }
  
  document.addEventListener('keydown', event => {
    if(hangman.errorsLeft > 0 && hangman.checkIfLetter(event.keyCode)){
      if(hangman.checkClickedLetters(letter) && hangman.secretWord.includes(letter)){
          hangman.addCorrectLetter(letter)
        }
        else if (hangman.checkClickedLetters(letter)){
          hangman.addWrongLetter(letter)
          hangman.drawHangman(errorsLeft)
        }
  }})
  