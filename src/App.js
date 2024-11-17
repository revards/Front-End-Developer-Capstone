import React from 'react';
import './App.css';
import { Header } from './Header.js';
import { Main } from './Main.js';
import { Nav } from './Nav.js';
import { Footer } from './Footer.js';

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
