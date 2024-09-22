import React, { useEffect, useState } from 'react';
import './App.css';

function App(){
  const [targetWord, setTargetWord] = useState('react');
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const maxGuesses = 6;

  useEffect(() => {
    fetchWord();
  }, []);

  const fetchWord = async () => {
    try{
      const response = await fetch('https://api.datamuse.com/words?sp=?????&max=100'); //sp=????? is a wildcard for 5 letter words
      const data = await response.json();

      if(data.length > 0){
        const randomWord = data[Math.floor(Math.random() * data.length)].word.toLowerCase(); //picks a word at random
        setTargetWord(randomWord);
        setGameOver(false);
      }

      else{
        console.error('No words found');
      }
    }
    catch(error){
      console.error('Error fetching word:', error);
    }
  };


  useEffect(() => {

    const handleKeyDown = (event) => {
      if(gameOver) return;
      const letter = event.key.toUpperCase();

    if(letter === 'ENTER'){
      handleGuess();
    }

    else if(letter === 'BACKSPACE'){
      setCurrentGuess(currentGuess.slice(0, -1));
    }

    else if(letter.length === 1 && currentGuess.length < targetWord.length && /^[A-Z]$/.test(letter)){
      setCurrentGuess(currentGuess + letter);
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };

  }, [currentGuess, gameOver]);


  //Input handling
  const handleKeyPress = (letter) => {
    if(gameOver) return;
    
    if(letter === 'ENTER'){
      handleGuess();
    }

    else if(letter === 'BACKSPACE'){
      setCurrentGuess(currentGuess.slice(0, -1));
    }

    else if(currentGuess.length < targetWord.length){
      setCurrentGuess(currentGuess + letter);
    }

  };

  const handleGuess = async () => {
    if(currentGuess.length === targetWord.length){

      if(await isValidWord(currentGuess)){
        setGuesses([...guesses, currentGuess]);
        setCurrentGuess('');
      }

      else{
        alert('Invalid word, please try again.');
        return;
      }

      if(currentGuess.toLowerCase() === targetWord.toLowerCase()){
        setGameOver(true);
        return;
      }

      else if(guesses.length + 1 >= maxGuesses){
        setGameOver(true);
        return;
      }
    }
  };

  const isValidWord = async (word) => {
    try{
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if(response.ok){
        const data = await response.json();
        return true;
      }
      return false;
    }
    catch(error){
      console.error('Error validating word:', error);
      return false;
    }
  };

  const checkGuess = (guess) => {

    let result = [];
    const normalizedGuess = guess.toLowerCase();
    const normalizedTarget = targetWord.toLowerCase();
    
    for(let i=0; i<5; i++){

      if(normalizedGuess[i] === normalizedTarget[i]){
        result.push('correct');
      }

      else if(normalizedTarget.includes(normalizedGuess[i])){
        result.push('misplaced');
      }

      else{
        result.push('incorrect');
      }

    }

    return result;
  };

  const startNewGame = () => {
    setGuesses([]);
    setCurrentGuess('');
    fetchWord();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle Game</h1>

        <h6>Note: Actual amount of misplaced letters may be less than the amount of misplaced cells shown</h6>
        <h6>You have 6 attempts to guess the correct word!</h6>

        {/* Game Board */}

        <div className="board">
          {guesses.map((guess, index) => {
            const result = checkGuess(guess);

            return (
              <div className="row" key={index}>

                {guess.split('').map((letter, i) => (

                  <span className={`cell ${result[i]}`} key={i}>
                    {letter}
                  </span>
                  
                ))}

              </div>
            );
          })}

          {/* Current Guess Row */}
          {!gameOver && (
            <div className="row">

              {Array(5).fill('').map((_, i) => (

                <span className="cell" key={i}>
                  {i < currentGuess.length ? currentGuess[i] : ''}
                </span>

              ))}

            </div>
          )}
        </div>

        {/* New Game button */}

        {gameOver && (
          <div className="overlay">
            <div className="overlay-content">
              <p>The target word was: <strong>{targetWord}</strong></p> 
              <button className="new-game-button" onClick={startNewGame}>Start New Game</button>
            </div>
          </div>
        )}

        {/* On-Screen Keyboard */}

        <div className="keyboard">
        {['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'].map((row, rowIndex) => (
          
          <div className="keyboard-row" key={rowIndex}>
            {row.split('').map((key) => (

              <button key={key} onClick={() => handleKeyPress(key)}>
                {key}
              </button>
            ))}

          </div>
        ))}

        <div className="keyboard-row">
          <button onClick={() => handleKeyPress('BACKSPACE')}>⌫</button>
          <button onClick={() => handleKeyPress('ENTER')}>⏎</button>
        </div>


        </div>
      </header>
    </div>
  );

}

export default App;
