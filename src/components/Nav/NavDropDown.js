import React from 'react';



const NavDropDown = ({children, style}) => {
  
  let heigth= null

  if (style!=null){

    heigth = style + 25
    console.log(heigth)

  }
  
  
  return (
    <div className='dropdown' style={{ height: heigth }}>
        {children}
    </div>
  )
}

export default NavDropDown;