import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const CartContext = createContext();

export function UserContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('ko');

  return (
    <UserContext.Provider
      value={{ darkMode, setDarkMode, language, setLanguage }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
