import React from 'react';

const DropdownItem = ({children,lefticon, rigthicon}) => {
  return (
    <a href='#' className='menu-item'>
    {  lefticon ?  <span className='icon-button'>{lefticon}</span>: null  }
       
            {children}
    {  rigthicon ?  <span className='icon-button'>{rigthicon}</span>: null  }
        

    </a>
  )
}

export default DropdownItem;