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
      <p>Hint : The country With Longest Capital Names In The World.</p>
      <img src="thailand.jpg"></img>
      <WordCard value="Korea"/>
      <p>Hint : The country with HANBOK as their national costume.</p>
      <img src="korea.jpg"></img>
      <WordCard value="Japan"/>
      <p>Hint : The country that have FUJI Mount.</p>
      <img src="japan.jpg"></img>
      <WordCard value="India"/>
      <p>Hint : The country has a tourist attraction that symbolizes love known as the Taj Mahal.</p>
      <img src="india.jpg"></img>
      <WordCard value="Hongkong"/>
      <p>Hint : The country where the Transformers movie was filmed was at the Yick Fat Building.</p>
      <img src="hongkong.jpg"></img>

    <div>
      <br></br><br></br><br></br>
      <p>ONINT CHOOZENG STUDEN ID : 6310110681</p>
    </div>

    </div>
    
  );
}

export default App;
