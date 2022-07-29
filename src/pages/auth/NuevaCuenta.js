import React,{useState, useContext} from 'react'
import {Link} from 'react-router-dom';
import Footer from '../../components/auth/Footer'
import { FaPaintBrush } from 'react-icons/fa';
import alertaContext from '../../context/alertaContext/alertaContext';
import '../../index.css';

const NuevaCuenta = ()=>{

    const auxAlertaContext = useContext(alertaContext);
    const {alerta,mostrarAlerta}= auxAlertaContext;

    const [newUser, setNewuser]= useState({
        nombre:"",
        email:"",
        password:"",
        passwordTes:""
    });

    const {nombre,email,password,passwordTes}= newUser;


    const onChange= e=>{
        setNewuser({
            ...newUser,
            [e.target.name]:e.target.value
        })


    }
    const onSubmit= e=>{
        e.preventDefault();

        //validar campos vacios
        if(email.trim() ==='' || password.trim() ===''|| passwordTes.trim()===''|| nombre.trim()==='' ){
            
            mostrarAlerta('Todos los campos son obligatorios', 'error')
            return;
        }
        
        //validar contraseñas iguales
        if(password!==passwordTes){
            mostrarAlerta('La contraseñas no coinciden', 'error')

        }
    }

    return (
        <div className='max-w-sm mx-auto mt-20 px-10 w-4/5 min-w-fit'>
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg} </div>) : null}
        
            <h2 className='text-center text-3xl text-gray-900 font-sans font-extrabold tracking-tight' >Registrarse</h2>

            <form className="grid grid-cols-1 mt-5" onSubmit={onSubmit}>
                
                <div className=" input-estudioForm_div--nc ">
                    <FaPaintBrush className="input-icon"></FaPaintBrush>
                    <input
                        className="input-estudioForm"
                        type={"text "}
                        name='nombre'
                        value={nombre}
                        onChange={onChange}
                        placeholder={"Nombre Usuario"}
                    />
                </div>
                    
                <div className=" input-estudioForm_div--nc ">
                    <FaPaintBrush className="input-icon"></FaPaintBrush>
                    <input className="input-estudioForm" 
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="Email" />
                    
                </div>
                <div className=" input-estudioForm_div--nc ">
                    <FaPaintBrush className="input-icon"></FaPaintBrush>
                    <input className="input-estudioForm" 
                        type="password"
                        id="password"
                        name="password"
                        onChange={onChange}
                        value={password}
                        placeholder="Escribir Contraseña" />
                </div>

                <div className=" input-estudioForm_div--nc ">
                    <FaPaintBrush className="input-icon"></FaPaintBrush>
                    <input className="input-estudioForm" 
                        type="password"
                        id="passwordtes"
                        name="passwordTes"
                        onChange={onChange}
                        value={passwordTes}
                        placeholder="Repetir Contraseña" />
                </div>
                

                    
                <input className="btn mt-3"
                type="submit" value='Registrarse'/>
        
                <Link to={"/"} className= "text-center mt-4 text-blue-500">Ya tengo una Cuenta</Link>
            </form>

            <Footer/>

        </div>
    );
}

export default NuevaCuenta;