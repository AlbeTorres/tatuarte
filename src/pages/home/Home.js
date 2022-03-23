import React,{Fragment,useState} from 'react'
import UserOption from '../../components/layout/home/UserOption'
import {Link} from 'react-router-dom';
import EstudioCard from '../../components/estudio/EstudioCard';
import Busqueda from '../../components/layout/home/Busqueda';

const Home = ()=>{

    const[logeado, setLogeado]=useState(true);

    return (
        <Fragment>
        <header className='flex items-center justify-between flex-wrap dark:bg-gray-800  w-full z-10 top-0'>
            <div className='flex-shrink-0'>
                <Link to={"/home"} className="pl-2  font-bold italic  underline decoration-wavy text-2xl tracking-tighter flex ">
                <span className='font-serif'>tatto0</span>
                <p className='uppercase font-mono'>Arte</p>
                </Link>
            </div>
            <nav className='UserOption'>
                <UserOption logeado={logeado}/>
        

            </nav>
        </header>
        <section className='w-10/12 mx-auto md:w-1/2 my-5'>
            <Busqueda/>

        </section>
        <section className='lg:grid grid-cols-3 lg:gap-1 h-screen  justify-items-center overflow-y-scroll'>
            <EstudioCard/>
            <EstudioCard/>
            <EstudioCard/>
            <EstudioCard/>
            <EstudioCard/>
            <EstudioCard/>
            <EstudioCard/>

        </section>
        <footer className=' flex  flex-col lg:flex-row justify-center lg:items-center '>
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