import React from 'react';
import './App.css';
import { Header } from './components/Header.js';
import { Main } from './sections/Main.js';
import { Nav } from './components/Nav.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <>
		<Header/>
		<Nav/>
		<Main/>
		<Footer/>
    </>
  );
}

export default App;
