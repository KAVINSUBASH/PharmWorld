import './App.css';
import Signin from './components/Signin';
import HomePage from './components/HomePage';
import CardMedicine from './components/CardMedicine';
import Payment from './components/Payment';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signin' element ={<Signin/>}/>
        <Route path='/cardmedicine' element ={<CardMedicine/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
