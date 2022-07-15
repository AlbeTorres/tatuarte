import React,{Fragment,useState} from 'react'
import UserOption from '../../components/home/UserOption/UserOption'
import {Link} from 'react-router-dom';
import EstudioCard from '../../components/estudio/EstudioCard';
import Busqueda from '../../components/home/Busqueda/Busqueda';
import '../../index.css'

const Home = ()=>{

    const[logeado, setLogeado]=useState(true);
    const[visible, setVisible]=useState(false);

    const menuSetVisible=()=>{
        setVisible(!visible);
    }

    return (
        <div className='bg-gray-50'>
        <header className='flex items-center justify-between contenedor p-3 pt-10 '>
        
            <Link to={"/home"}>
                <h1 className='text-4xl font-thin font-sans md:text-6xl bg-gray-600 text-white pl-1 rounded-sm'>Tatú<span className='font-bold text-gray-600 bg-gray-50  '>Arte</span></h1>
            </Link>

           
            <UserOption />
        
        </header>

        <section className='w-2/3  mx-auto md:w-1/3  my-5 lg:w-3/12 '>
            <Busqueda menuButton={menuSetVisible}/>

        </section>

        { visible  ?  
          <div className="absolute grid grid-rows-2 justify-items-center items-center rounded-md text-4xl right-10 left-10 z-10 text-gray-600 contacto-link h-28 shadow-md">
                            
                            <Link to={'/home'} className='estudio-btn text-center'>Añadir</Link>
                            <Link to={'/home'} className='estudio-btn text-center'>Editar</Link>

                        </div>   : null
          } 
        <section className='grid gap-4 items-center  auto-rows-min    md:grid-cols-2 lg:grid-cols-3 md:gap-4  h-screen lg:h-96  overflow-y-scroll p-1  w-11/12  md:w-4/5 mx-auto ' >
            <EstudioCard name={'La Tiza'} img={'img/test.jpg '} />
            <EstudioCard name={'Nemesis Ink Tattoo Studios'} img={'img/1.jpg '}/>
            <EstudioCard name={'Nemesis Ink Tattoo Studios'} img={'img/test.jpg '}/>
           
           
            

        </section>
        
        <footer className=' flex  flex-col lg:flex-row justify-center lg:items-center container'>
            <p className='text-center'>Made by Albert with <span>Love </span></p>
            <div className="social">
                <a href="twitter" className="social-link twitter"></a>
                <a href="inst"    className="social-link instagram"></a>
                <a href=""        className="social-link facebook"></a>
                <a href=""        className="social-link github"></a>
            </div>
        </footer>

        </div>
    );
}

export default Home;