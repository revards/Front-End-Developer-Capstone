import './App.css';
import { Layout } from './Layout';
import {Home} from  './components/pages/home/Home'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Booking } from './components/pages/reserve/Booking';
import ConfirmedBooking from './components/pages/reserve/ConfirmedBooking';

function App () {
  return (
		<Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Booking />} />
        <Route path="/confirmedbooking" element={<ConfirmedBooking/>}/>
      </Routes>
    </Layout>
  );
}


export default App;