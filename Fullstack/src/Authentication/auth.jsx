import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);      // user object
  const [token, setToken] = useState(null);    // JWT token
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('auth');
    if (saved) {
      const { user, token } = JSON.parse(saved);
      setUser(user);
      setToken(token);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user && token) {
      localStorage.setItem('auth', JSON.stringify({ user, token }));
    } else {
      localStorage.removeItem('auth');
    }
  }, [user, token]);

  const login = ({ user, token }) => {
    setUser(user);
    setToken(token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
