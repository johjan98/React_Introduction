import React from "react";

//Creando un hook personalizado
export function useLocalStorage(itemName, initialValue){ 

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  const [sincronizedItem, setSincronizedItem] = React.useState(true);

  // Este hook se usa para renderizar el contenido dependiendo de la condición en el segundo parámetro. Si no se le manda el segundo argumento, el efecto se ejecuta (hace re-render) infinitas veces. Si se le pone un array vacío ([]), el efecto se ejecuta sólo una vez.
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
        setSincronizedItem(true);
      } catch(error){
        setError(true);
      }
    }, 2000)
  }, [ sincronizedItem ]);

  const saveItem = (newItem) => {
    try {
      setItem(newItem);
      localStorage.setItem(itemName, JSON.stringify(newItem));
    } catch (error) {
      setError(true);
    }
  }

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  }

  return {item, saveItem, loading, error, sincronizeItem}
}