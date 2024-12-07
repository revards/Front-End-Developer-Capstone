import React from 'react';
import './App.css';
import { Layout } from './Layout';
import {Home} from  './components/pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Booking } from './components/pages/reserve/Booking';

function App () {
  return (
    <>
		<Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Booking />} />
      </Routes>
    </Layout>
    </>
  );
}

export default App;