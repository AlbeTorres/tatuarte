import React,{Fragment,useState, useContext} from 'react'
import UserOption from '../../components/home/UserOption/UserOption'
import {Link} from 'react-router-dom';
import EstudioCard from '../../components/estudio/EstudioCard';
import Busqueda from '../../components/home/Busqueda/Busqueda';
import DropMenu from '../../components/dropDownMenu/DropDownMenu';
import {FaCaretDown,FaRegCompass,FaRegMap,FaGithub, FaTwitter} from 'react-icons/fa';
import estudioContext from '../../context/estudioContext/estudioContext';
import '../../index.css'

const Home = ()=>{
    
    let estudioFilter=[];

    //arreglo de provincias de Cuba
    const provinciaArray= [{
        id: 1,
        nombre: 'Pinar del Río',
        municipios:["Consolación del Sur", "Guane", "La Palma", "Los Palacios", "Mantua", "Minas de Matahambre", "Pinar del Río", "San Juan y Martínez", "San Luis", "Sandino", "Viñales"]
    }, {
        id: 2,
        nombre: 'Artemisa',
        municipios:[
            "Alquízar", "Artemisa", "Bauta", "Caimito", "Guanajay", "Güira de Melena", "Mariel", "San Antonio de los Baños", "Bahía Honda", "San Cristóbal", "Candelaria"]
    }, {
        id: 3,
        nombre: 'Mayabeque',
        municipios:["Batabanó", "Bejucal", "Güines", "Jaruco", "Madruga", "Melena del Sur", "Nueva Paz", "Quivicán", "San José de las Lajas", "San Nicolás de Bari", "Santa Cruz del Norte"]
    }, {
        id: 4,
        nombre: 'La Habana',
        municipios:[
            "Arroyo Naranjo", "Boyeros", "Centro Habana", "Cerro", "Cotorro", "Diez de Octubre", "Guanabacoa", "Habana del Este", "Habana Vieja", "La Lisa", "Marianao", "Playa", "Plaza", "Regla", "San Miguel del Padrón"]
    }, {
        id: 5,
        nombre: 'Matanzas',
        municipios:["Calimete", "Cárdenas", "Ciénaga de Zapata", "Colón", "Jagüey Grande", "Jovellanos", "Limonar", "Los Arabos", "Martí", "Matanzas", "Pedro Betancourt", "Perico", "Unión de Reyes"]
    }, {
        id: 6,
        nombre: 'Cienfuegos',
        municipios:["Abreus", "Aguada de Pasajeros", "Cienfuegos", "Cruces", "Cumanayagua", "Palmira", "Rodas", "Santa Isabel de las Lajas"]

    }, {
        id: 7,
        nombre: 'Villa Clara',

        municipios:["Caibarién", "Camajuaní", "Cifuentes", "Corralillo", "Encrucijada", "Manicaragua", "Placetas", "Quemado de Güines", "Ranchuelo", "Remedios", "Sagua la Grande", "Santa Clara", "Santo Domingo"]
    }, {
        id: "8",
        nombre: 'Sancti Spíritus',
        municipios:[
            "Cabaigúan", "Fomento", "Jatibonico", "La Sierpe", "Sancti Spíritus", "Taguasco", "Trinidad", "Yaguajay"]
    }, {
        id: "9",
        nombre: 'Ciego de Ávila',
        municipios:["Ciro Redondo", "Baraguá", "Bolivia", "Chambas", "Ciego de Ávila", "Florencia", "Majagua", "Morón", "Primero de Enero", "Venezuela"]
    }, {
        id: "10",
        nombre: 'Camagüey',
        municipios:[
            "Camagüey", "Carlos Manuel de Céspedes", "Esmeralda", "Florida", "Guaimaro", "Jimagüayú", "Minas", "Najasa", "Nuevitas", "Santa Cruz del Sur", "Sibanicú", "Sierra de Cubitas", "Vertientes"]
    }, {
        id: 11,
        nombre: 'Las Tunas',
        municipios:[
            "Amancio Rodríguez", "Colombia", "Jesús Menéndez", "Jobabo", "Las Tunas", "Majibacoa", "Manatí", "Puerto Padre"]
    }, {
        id: 12,
        nombre: 'Holguín',
        municipios:[
            "Antilla", "Báguanos", "Banes", "Cacocum", "Calixto García", "Cueto", "Frank País", "Gibara", "Holguín", "Mayarí", "Moa", "Rafael Freyre", "Sagua de Tánamo", "Urbano Noris"]
    }, {
        id: 13,
        nombre: 'Santiago de Cuba',
        municipios:[
            "Contramaestre", "Guamá", "Julio Antonio Mella", "Palma Soriano", "San Luis", "Santiago de Cuba", "Segundo Frente", "Songo la Maya", "Tercer Frente"]
    }, {
        id: "14",
        nombre: 'Guantánamo',
        municipios:[
            "Baracoa", "Caimanera", "El Salvador", "Guantánamo", "Imías", "Maisí", "Manuel Tames", "Niceto Pérez", "San Antonio del Sur", "Yateras"]
    }, {
        id: "15",
        nombre: 'Isla de la Juventud',
        municipios:['']
    },
        {
            id:16,
            nombre:"Granma",
            municipios:[
                "Bartolomé Masó", "Bayamo", "Buey Arriba", "Campechuela", "Cauto Cristo", "Guisa", "Jiguaní", "Manzanillo", "Media Luna", "Niquero", "Pilón", "Río Cauto", "Yara"]
        }];

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