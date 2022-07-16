import React,{Fragment,useState} from 'react'
import UserOption from '../../components/home/UserOption/UserOption'
import {Link} from 'react-router-dom';
import EstudioCard from '../../components/estudio/EstudioCard';
import Busqueda from '../../components/home/Busqueda/Busqueda';
import DropMenu from '../../components/dropDownMenu/DropDownMenu';
import {FaCaretDown,FaRegCompass,FaRegMap} from 'react-icons/fa';
import '../../index.css'

const Home = ()=>{

    const[logeado, setLogeado]=useState(true);
    const[visible, setVisible]=useState(false);

    const provinciaArray= [
        {icon: <FaRegCompass/>,text:{type:'provincia', name:'Artemisa'} },
        {icon: <FaRegCompass/>,text:{type:'provincia', name:'Mayabeque'}},
        {icon: <FaRegCompass/>,text:{type:'provincia', name:'P. del Río'}},
        {icon: <FaRegCompass/>,text:{type:'provincia', name:'La Habana'}},
        {icon: <FaRegCompass/>,text:{type:'provincia', name:'Matanzas'}},
        
        
    ];
    const municipioArray= [
        {icon:<FaRegMap/>,text:{type:'municipio', name:'Artemisa'}},
        {icon:<FaRegMap/>,text:{type:'municipio', name:'Candelaria'}},
        {icon:<FaRegMap/>,text:{type:'municipio', name:'B. Honda'}},
        {icon:<FaRegMap/>,text:{type:'municipio', name:'Guanaja'}},
        {icon:<FaRegMap/>,text:{type:'municipio', name:'Alquizar'}},
        
        
    ];

    const [filtro, setFiltro] = useState({
        provincia:'provincia',
        municipio: 'municipio'
    });

    const onSelect =(itemSelect)=>{

        if(itemSelect.type !== 'municipio'){
            setFiltro({
                ...filtro,
                provincia:itemSelect.name
    
            })
        }else{
            setFiltro({
                ...filtro,
                municipio:itemSelect.name
    
            })
        }
        

    }

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
          <div className="absolute  items-center rounded-md right-10 left-10 z-10 text-gray-600 contacto-link h-16 shadow-md md:w-80 md:mx-auto  ">
            <div className='relative w-full flex items-center justify-between p-4 '>
                <DropMenu icon={<FaCaretDown/>} name={filtro.provincia} arreglo={provinciaArray} funcion={onSelect} />
                <DropMenu icon={<FaCaretDown/>} name={filtro.municipio} arreglo={municipioArray} funcion={onSelect}/>
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
        
        <footer className=' flex  flex-col lg:flex-row justify-center lg:items-center
          bg-gray-600 text-gray-50 mx-auto h-18 mt-2'>
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