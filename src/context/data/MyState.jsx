import React, { useState } from 'react'
import MyContext from './MyContext'


const MyState = (props) => {
  const [mode, setMode] = useState('dark')



  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));

    // Apply classes directly to the html element
    const htmlElement = document.querySelector('html');
    htmlElement.classList.remove('dark', 'light');
    htmlElement.classList.add(mode === 'light' ? 'dark' : 'light');

    
  };
  // document.querySelector('html').classList.remove('dark','light')
  // document.querySelector('html').classList.add(mode)


  return (
    <MyContext.Provider value={{ mode, toggleMode }}>

      {props.children}

    </MyContext.Provider>

  );
};

export default MyState;
