import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export default function useDarkMode() {
  const [value, setValue] = useLocalStorage('test')

  useEffect(() => {
    if (value === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

  }, [value])
  return (
    [value, setValue]
  )
}