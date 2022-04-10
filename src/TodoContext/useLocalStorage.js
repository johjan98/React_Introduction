import React from "react";

//Creando un hook personalizado
export function useLocalStorage(itemName, initialValue){ 

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  // Este hook se usa para renderizar el contenido dependiendo de la condición en el segundo parámetro.
  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        const localStorageItems = localStorage.getItem(itemName);
      let parsedItems;

      if(!localStorageItems){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItems = [];
      } else {
        parsedItems = JSON.parse(localStorageItems);
      }

      setItem(parsedItems);
      setLoading(false);
      } catch(error){
        setError(true);
      }
    }, 2000)
  });

  const saveItem = (newItem) => {
    try {
      setItem(newItem);
      localStorage.setItem(itemName, JSON.stringify(newItem));
    } catch (error) {
      setError(true);
    }
  }

  return {item, saveItem, loading, error}
}