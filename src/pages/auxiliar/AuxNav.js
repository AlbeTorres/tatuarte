import React from "react";
import NavComponent from "../../components/Nav/NavComponent";
import NavItem from "../../components/Nav/NavItem";
import {FaCaretDown} from 'react-icons/fa';
import{FaFilter} from 'react-icons/fa';
import NavDropDown from "../../components/Nav/NavDropDown";
import DropdownItem from "../../components/Nav/DropdownItem";



const AuxNav = () => {
  return (
    <NavComponent>
        <NavItem icon={<FaCaretDown/>} >
          <NavDropDown>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem lefticon={<FaFilter/>}>Filter</DropdownItem>
          </NavDropDown>
        </NavItem>
        
        
        
    </NavComponent>
  )
}

export default AuxNav;

