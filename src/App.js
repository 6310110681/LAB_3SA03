import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Country";
function App() {
  return (
    <div>
      <div class="value">
        <header>
          <h1>WORD GAME</h1>
        </header>
        <h2>Country In Asia</h2>
        <p>Please, Spell the word correctly.</p>
    </div>

      <WordCard value="Thailand"/>
      <WordCard value="Korea"/>
      <WordCard value="Japan"/>
      <WordCard value="India"/>
      <WordCard value="Hongkong"/>

    <div>
      <p>ONINT CHOOZENG STUDEN ID : 6310110681</p>
    </div>

    </div>
  );
}

export default App;
