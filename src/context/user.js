import { createContext, useState } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  function userInfo(data) {
    setUser(data);
  }

  return (
    <AuthContext.Provider
      value={{
        auth: !!user,
        userInfo,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
