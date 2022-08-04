import React,{Fragment,useState, useContext} from 'react'
import UserOption from '../../components/home/UserOption/UserOption'
import {Link} from 'react-router-dom';
import EstudioCard from '../../components/estudio/EstudioCard';
import Busqueda from '../../components/home/Busqueda/Busqueda';
import DropMenu from '../../components/dropDownMenu/DropDownMenu';
import {FaCaretDown,FaRegCompass,FaRegMap,FaGithub, FaTwitter} from 'react-icons/fa';
import estudioContext from '../../context/estudioContext/estudioContext';
import provinciaArray from '../../utils/provinciasCuba';
import '../../index.css'

const Home = ()=>{
    
    let estudioFilter=[];

   

    const AuxEstudioContext=useContext(estudioContext);
    const {busqueda, estudios}=AuxEstudioContext;

    console.log(estudios)

    const[visible, setVisible]=useState(false);


    const [filtro, setFiltro] = useState({
            provincia:'provincia',
            municipio: 'municipio'
        });
        
    //obtener los municipios por provoncias-----------------------------------
    const axuArray= provinciaArray.filter(provincia=>provincia.nombre==filtro.provincia);
    let municipioArray=[]

    if(axuArray[0]!=undefined){municipioArray=axuArray[0].municipios}else{ municipioArray=["none"]}
    //--------------------------------------------------------------------------   
        

    const onSelectProvincia =(itemSelect)=>{
        console.log(itemSelect)

            setFiltro({
                ...filtro,
                provincia:itemSelect
    
            })

        }

    const onSelectMunicipio =(itemSelect)=>{

            setFiltro({
                ...filtro,
                municipio:itemSelect
            })
        }
        
    const menuSetVisible=()=>{
        setVisible(!visible);
        }

    //filtrar por busqueda-----------------
    if(busqueda!==""){ 
        estudioFilter = estudios.filter(estudio=> { return Object.values(estudio).join(" ").toLowerCase()
                                                                                 .includes(busqueda.toLowerCase())}); 
    }else{
        estudioFilter= estudios;
    } 
    //--------------------------------------

    //filtrar por provincia y municipio------------------
    if(filtro.provincia!=='provincia'){ 
        estudioFilter = estudios.filter(estudio=> estudio.provincia==filtro.provincia); 
        if(filtro.municipio!='municipio'){
            estudioFilter = estudios.filter(estudio=> estudio.municipio==filtro.municipio); 
        }
    }else{
        estudioFilter= estudios;
    } 
    //--------------------------------------

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
            <div className="absolute  items-center rounded-md right-10 left-10 z-10 text-gray-600 contacto-link h-16 shadow-md md:w-80 md:mx-auto  ">
                <div className='relative w-full flex items-center justify-between p-4 '>
                    <DropMenu icon={<FaCaretDown/>} iconItem={ <FaRegCompass/>} name={filtro.provincia} arreglo={provinciaArray} funcion={onSelectProvincia} />
                    <DropMenu icon={<FaCaretDown/>} iconItem={ <FaRegMap/>} name={filtro.municipio} arreglo={municipioArray} funcion={onSelectMunicipio}/>
                </div>

            </div>   : null
        } 
        <section className='grid gap-4 items-center  auto-rows-min    md:grid-cols-2 lg:grid-cols-3 md:gap-4  sectionHeigth  overflow-y-scroll p-1  w-11/12  md:w-4/5 mx-auto ' >
            <EstudioCard name={'La Tiza'} img={'img/test.jpg '} />
            <EstudioCard name={'Nemesis Ink Tattoo Studios'} img={'img/1.jpg '}/>
            <EstudioCard name={'Nemesis Ink Tattoo Studios'} img={'img/test.jpg '}/>
            <EstudioCard name={'Nemesis Ink Tattoo Studios'} img={'img/test.jpg '}/>
            <EstudioCard name={'Nemesis Ink Tattoo Studios'} img={'img/test.jpg '}/>
            <EstudioCard name={'Nemesis Ink Tattoo Studios'} img={'img/test.jpg '}/>
            <EstudioCard name={'Nemesis Ink Tattoo Studios'} img={'img/test.jpg '}/>
            <EstudioCard name={'Nemesis Ink Tattoo Studios'} img={'img/test.jpg '}/>
            <EstudioCard name={'Nemesis Ink Tattoo Studios'} img={'img/test.jpg '}/>
            <EstudioCard name={'Nemesis Ink Tattoo Studios'} img={'img/test.jpg '}/>
            <EstudioCard name={'Nemesis Ink Tattoo Studios'} img={'img/test.jpg '}/>
            <EstudioCard name={'Nemesis Ink Tattoo Studios'} img={'img/test.jpg '}/>
            <EstudioCard name={'Nemesis Ink Tattoo Studios'} img={'img/test.jpg '}/>
           
           
            

        </section>
        
        <footer className=' flex  flex-col lg:flex-row justify-center lg:items-center lg:justify-between lg:px-10
          bg-gray-600 text-gray-50 mx-auto h-18 mt-2 p-2'>
            <p className='text-center'>Made by Albert with <span>Love </span></p>
            <div className="flex items-center justify-center mt-1   ">
                <a href="https://twitter.com/albe_torres" className=" cursor-pointer mx-2" rel='noreferrer' target={'_blank'}>
                    <FaTwitter className='text-2xl ' /></a>
                <a href="https://github.com/albeTorres"   className=" cursor-pointer mx-2" rel='noreferrer' target={'_blank'}><FaGithub className='text-2xl '/></a>
            </div>
        </footer>

        </div>
    );
}

export default Home;