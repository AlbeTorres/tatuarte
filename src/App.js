import { React} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/auth/Login';
import NuevaCuenta from './pages/auth/NuevaCuenta';
import Home from './pages/home/Home';
import Estudio from './pages/estudio/Estudio';
import AuxNav from './pages/auxiliar/AuxNav';


function App() {
  return ( 
    
    
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact path='/nueva-cuenta' element={<NuevaCuenta/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/estudio' element={<Estudio/>} />
          <Route exact path='/nav' element={<AuxNav/>} />
        </Routes>
      </Router>
    

    
    );
}

export default App;
