import React,{Fragment,useState} from 'react'
import UserOption from '../../components/home/UserOption/UserOption'
import {Link} from 'react-router-dom';
import EstudioCard from '../../components/estudio/EstudioCard';
import Busqueda from '../../components/home/Busqueda/Busqueda';
import '../../index.css'

const Home = ()=>{

    const[logeado, setLogeado]=useState(true);

    return (
        <Fragment>
        <header className='flex items-center justify-between contenedor p-3 pt-10 '>
        
            <Link to={"/home"}>
                <h1 className='text-4xl font-thin font-sans md:text-6xl bg-gray-600 text-white pl-1 rounded-sm'>Tatú<span className='font-bold text-gray-600 bg-white  '>Arte</span></h1>
            </Link>

           
            <UserOption />
        
        </header>

        <section className='w-10/12 mx-auto md:w-1/2 my-5'>
            <Busqueda/>

        </section>
        <section className='lg:grid lg:grid-cols-3 lg:gap-1 h-96 justify-items-center overflow-y-scroll py-4 contenedor' >
            <EstudioCard/>
            <EstudioCard/>
            <EstudioCard/>
            <EstudioCard/>
            <EstudioCard/>
            <EstudioCard/>
            <EstudioCard/>

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

        </Fragment>
    );
}

export default Home;