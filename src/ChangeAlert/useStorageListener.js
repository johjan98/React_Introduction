import React from "react";

export function useStorageListener(sincronize){

  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener('storage', (change)=>{
    if(change.key === 'TODOS_V1'){
      console.log('Hubo cambios en el storage!!');
      setStorageChange(true);
    }
  });

  const toggleShow = () =>{
    sincronize();
    setStorageChange(false);
  }

  return {
    show: storageChange,
    toggleShow
  }
}