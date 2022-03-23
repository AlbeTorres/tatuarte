import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import Footer from '../../components/layout/auth/Footer'
import '../../index.css';

const NuevaCuenta = ()=>{

    const [newUser, setNewuser]= useState({
        email:"",
        password:"",
        passwordTes:""
    });

    const {email,password,passwordTes}= newUser;


    const onChange= e=>{
        setNewuser({
            ...newUser,
            [e.target.name]:e.target.value
        })


    }
    const onSubmit= e=>{
        e.preventDefault();
    }

    return (
        <div className='max-w-sm mx-auto mt-20 px-10'>
        
            <h2 className='text-center text-3xl text-gray-900 font-sans font-extrabold tracking-tight' >Registrarse</h2>

            <form className="grid grid-cols-1 gap-y-4 mt-5" onSubmit={onSubmit}>
                
                    
                <input className="input" 
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Email" />
                    
                <input className="input" 
                    type="password"
                    id="password"
                    name="password"
                    onChange={onChange}
                    value={password}
                    placeholder="Escribir Contraseña" />

                <input className="input" 
                    type="password"
                    id="passwordtes"
                    name="passwordTes"
                    onChange={onChange}
                    value={passwordTes}
                    placeholder="Repetir Contraseña" />
                    
                <input className="btn mt-3"
                type="submit" value='Registrarse'/>
        
                <Link to={"/"} className= "text-center text-blue-500">Ya tengo una Cuenta</Link>
            </form>

            <Footer/>

        </div>
    );
}

export default NuevaCuenta;