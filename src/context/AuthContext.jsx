import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  // Login
  const login = (userData) => {
    setUser(userData);
  };

  // Logout
  const logout = () => {
    setUser(null);
    setCart([]); // Prazni korpu pri odjavi
  };

  // Dodavanje u korpu
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Uklanjanje iz korpe
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
