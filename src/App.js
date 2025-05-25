import './App.css';
import React, { useState } from 'react';
import Counter from "./components/Counter";
import Auth from './components/Auth';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Auth />
        <Counter />
      </main>
    </>
  );
}

export default App;
