import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  // Charger l'utilisateur depuis localStorage au montage
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error('Erreur chargement utilisateur:', error);
      localStorage.removeItem('user');
    }
    setReady(true);
  }, []);

  // Persister l'utilisateur en localStorage quand il change
  const handleSetUser = (newUser) => {
    setUser(newUser);
    if (newUser) {
      try {
        localStorage.setItem('user', JSON.stringify(newUser));
      } catch (error) {
        console.error('Erreur sauvegarde utilisateur:', error);
      }
    } else {
      localStorage.removeItem('user');
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser: handleSetUser, ready }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;