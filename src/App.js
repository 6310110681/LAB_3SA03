import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Country";
function App() {
  return (
    <div>
      <WordCard value="Thailand"/>
      <WordCard value="Korea"/>
      <WordCard value="Japan"/>
      <WordCard value="India"/>
      <WordCard value="Hongkong"/>
    </div>
  );
}

export default App;
