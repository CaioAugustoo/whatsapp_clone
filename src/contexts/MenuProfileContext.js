import { createContext, useState } from "react";

export const MenuProfileContext = createContext();

export const MenuProfile = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <MenuProfileContext.Provider value={{ openMenu, closeMenu, isOpen }}>
      {children}
    </MenuProfileContext.Provider>
  );
};
