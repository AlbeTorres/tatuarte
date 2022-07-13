import React from 'react';

const DropdownItem = ({children,lefticon, rigthicon,onClick, menu}) => {


    const onClickD=()=>{
      if(!menu){
        return
      }

      onClick(menu)

    }
    
  return (
    <a href='#' className='menu-item' onClick={onClickD}>
    {  lefticon ?  <span className='icon-button'>{lefticon}</span>: null  }
       
            {children}
    {  rigthicon ?  <span className='icon-button'>{rigthicon}</span>: null  }
        

    </a>
  )
}

export default DropdownItem;