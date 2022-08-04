import { React} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/auth/Login';
import NuevaCuenta from './pages/auth/NuevaCuenta';
import Home from './pages/home/Home';
import Estudio from './pages/estudio/Estudio';
import Estudioform from './pages/estudioForm/Estudioform';
import Usuario from './pages/usuario/Usuario';
import AlertaState from './context/alertaContext/alertaState'
import AuthState from './context/authContext/authState';
import EstudioState from './context/estudioContext/estudioState';
import tokenAuth from './config/tokenAuth';

 const token = localStorage.getItem('token');
 if(token){
  tokenAuth(token);
 }

function App() {
  return ( 
    <EstudioState>
        <AuthState>
            <AlertaState>
              <Router>
                <Routes>
                  <Route exact path='/login' element={<Login/>} />
                  <Route exact path='/nueva-cuenta' element={<NuevaCuenta/>} />
                  <Route exact path='/' element={<Home/>} />
                  <Route exact path='/estudio' element={<Estudio/>} />
                  <Route exact path='/estudioform' element={<Estudioform/>} />
                  <Route exact path='/usuario' element={<Usuario/>} />
                </Routes>
              </Router>
            </AlertaState>
        </AuthState>
    </EstudioState>
    

    
    );
}

export default App;
