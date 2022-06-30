import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import Footer from '../../components/auth/Footer'
import '../../index.css';

const Login = () => {   

    //state para inciar sesión
    const[auth,setAuth]=useState({
        email:"",
        password:""
    });

    //extraer email y password de auth
    const {email,password}=auth;

    //leer el email y password de los inputs
    const onChange=e=>{
        setAuth({...auth,
            [e.target.name]: e.target.value
        })
        console.log(auth);

    }

    //acción al submit el form
    const onSubmit=e=>{
        e.preventDefault();

        //validar campos

        //pasarlo al action
    }


    return (
        <div className='max-w-sm mx-auto mt-20 px-10'>
        
            <h2 className='text-center text-3xl text-gray-900 font-sans font-extrabold tracking-tight' >Inicia sesión</h2>

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
                    placeholder="Contraseña" />
                    
                <input className="btn mt-3"
                type="submit" value='Iniciar sesión'/>
        
            
                <label className='mx-auto'> 
                    <input className='mr-1' type="checkbox" id="cbox1" value="first_checkbox" />
                    Recuérdame
                </label>
        
                <Link to={"/"} className= "text-center text-blue-500">Olvidé mi contraseña</Link>
        
            </form>

            <p className="text-center block mt-2">
                No tienes ninguna cuenta 
                <Link to={"/nueva-cuenta"} className="ml-1 text-blue-500">Regístrate</Link>
            </p>
    
    
            <Footer/>

        </div>
    );
}

export default Login;