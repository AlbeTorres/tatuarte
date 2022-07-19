import React, { useCallback } from "react";

 const usePreventScroll=()=> {

  const lockScroll = useCallback(() => { 
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarCompensation}px`;
  }, [])

  const unlockScroll = useCallback(() => { 
    document.body.style.overflow = "";
    document.body.style.paddingRight = "0px";
  }, [])
    
  
  return {
    lockScroll,unlockScroll
  };
 
}

export default usePreventScroll;