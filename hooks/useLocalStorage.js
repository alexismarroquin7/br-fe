import { useState } from "react";

export const useLocalStorage = (key, initialState) => {
  const [value, setValue] = useState(() => {
    if(typeof window === 'undefined') return initialState;

    let item = localStorage.getItem(key);

    if(!item) {
      localStorage.setItem(key, JSON.stringify(initialState));
      item = localStorage.getItem(key)
    }
    
    return JSON.parse(item);
  })


  const setStoredValue = (newValue) => {
    setValue({...value, newValue})
    localStorage.setItem(key, {...value, newValue})
  }
  
  return [value, setStoredValue];
}