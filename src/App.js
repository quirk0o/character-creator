import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

import styles from './App.module.css';

const Bg = () => <div className={styles.bg} />

function App() {
  return (
    <div>
      <Bg />
      <CharacterEditor />
      <Footer />
    </div>
  );
}

export default App;
