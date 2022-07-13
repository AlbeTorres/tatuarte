import React,{useState} from "react";
import NavComponent from "../../components/Nav/NavComponent";
import NavItem from "../../components/Nav/NavItem";
import {FaCaretDown} from 'react-icons/fa';
import{FaFilter} from 'react-icons/fa';
import NavDropDown from "../../components/Nav/NavDropDown";
import DropdownItem from "../../components/Nav/DropdownItem";
import { CSSTransition } from "react-transition-group";
import '../../components/Nav/navbar.css'



const AuxNav = () => {

    const [activeMenu, setActiveMenu]=useState('main');
    const [menuHeigth, setMenueigth] = useState(null)

    const onClick =(a)=>{

      setActiveMenu(a);

    }

    const calcHeigth =el=>{
      const heigth = el.offsetHeight;
      setMenueigth(heigth);

    }

  return (
    <NavComponent>
        <NavItem icon={<FaCaretDown/>} >
          <NavDropDown style={menuHeigth}>
            <CSSTransition 
              in={activeMenu==='main'}
              unmountOnExit
              timeout={500}
              classNames='menu-primary'
              onEnter={calcHeigth}>

                <div className="menu">
                  <DropdownItem>Profile</DropdownItem>
                  <DropdownItem lefticon={<FaFilter/>} onClick={onClick} menu={'filter'}>Filter</DropdownItem>
                  <DropdownItem lefticon={<FaFilter/>} onClick={onClick} menu={'filter'}>Filter</DropdownItem>
                  <DropdownItem lefticon={<FaFilter/>} onClick={onClick} menu={'filter'}>Filter</DropdownItem>
                  <DropdownItem lefticon={<FaFilter/>} onClick={onClick} menu={'filter'}>Filter</DropdownItem>
                  <DropdownItem lefticon={<FaFilter/>} onClick={onClick} menu={'filter'}>Filter</DropdownItem>
                  <DropdownItem lefticon={<FaFilter/>} onClick={onClick} menu={'filter'}>Filter</DropdownItem>
                  <DropdownItem lefticon={<FaFilter/>} onClick={onClick} menu={'filter'}>Filter</DropdownItem>

                </div>

            </CSSTransition>

            <CSSTransition 
              in={activeMenu==='filter'}
              unmountOnExit
              timeout={500}
              classNames='menu-secondary'
              onEnter={calcHeigth}>

                <div className="menu">
                  <DropdownItem  onClick={onClick} menu={'main'}>Filter</DropdownItem>
                  <DropdownItem lefticon={<FaFilter/>}>Filter</DropdownItem>
                  <DropdownItem lefticon={<FaFilter/>}>Filter</DropdownItem>
                  <DropdownItem lefticon={<FaFilter/>}>Filter</DropdownItem>
                  <DropdownItem lefticon={<FaFilter/>}>Filter</DropdownItem>
                  <DropdownItem lefticon={<FaFilter/>}>Filter</DropdownItem>
                  <DropdownItem lefticon={<FaFilter/>}>Filter</DropdownItem> 

                </div>

            </CSSTransition>
          </NavDropDown>
        </NavItem>
        
        
        
    </NavComponent>
  )
}

export default AuxNav;

