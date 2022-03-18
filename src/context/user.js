import { createContext, useState } from 'react';
import api from '../services/api';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [loadingUser, setLoadingUser] = useState(false);
  const [user, setUser] = useState();
  const [errorStatus, setErrorStatus] = useState();

  async function login(username, password) {
    setLoadingUser(true);

    const isValidEmail = new RegExp(
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g
    ).test(username);

    if (errorStatus !== null) {
      if (username.length === 0 || password.length === 0) {
        return setErrorStatus('Você precisa preencher todos os campos');
      } else if (username.length !== 0 && !isValidEmail) {
        return setErrorStatus('Email inválido');
      }
    }
    try {
      const response = await api.post('users/login', {
        username,
        password,
      });
      setUser(response.data);
    } catch (e) {
      if (e.response.status !== 200) {
        setErrorStatus('Usuário não encontrado');
      }
    } finally {
      setLoadingUser(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        auth: !!user,
        login,
        errorStatus,
        loadingUser,
        setErrorStatus,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
