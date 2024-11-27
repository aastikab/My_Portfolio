import React, { useState } from 'react';

const GuessTheNumber = () => {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = (e) => {
    e.preventDefault();
    const numericGuess = parseInt(guess);
    setAttempts(attempts + 1);

    if (numericGuess < targetNumber) {
      setMessage('Too low! Try again.');
    } else if (numericGuess > targetNumber) {
      setMessage('Too high! Try again.');
    } else {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
    }
    setGuess('');
  };

  return (
    <div style={{ textAlign: 'center', color: '#333' }}>
      <h2>Guess the Number Game</h2>
      <p>Guess a number between 1 and 100:</p>
      <form onSubmit={handleGuess}>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          style={{ padding: '10px', fontSize: '1rem' }}
          required
        />
        <button type="submit" style={{ padding: '10px 15px', fontSize: '1rem', marginLeft: '10px' }}>
          Guess
        </button>
      </form>
      <p>{message}</p>
      <button onClick={() => window.location.reload()} style={{ marginTop: '20px', padding: '10px 15px' }}>
        Play Again
      </button>
    </div>
  );
};

export default GuessTheNumber;
