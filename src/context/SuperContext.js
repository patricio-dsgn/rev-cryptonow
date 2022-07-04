import React, {useState} from 'react';
export const ThemeContext = React.createContext()

const SuperContext = (props) => {
  const [theme, setTheme] =  useState('light')
  const [lang, setLang] =  useState('es')
  return (
    <ThemeContext.Provider value={{theme, setTheme, lang, setLang}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default SuperContext;
