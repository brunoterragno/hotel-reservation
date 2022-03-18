import React, { useState } from 'react';
import { LoginContainer, BtnClose, Content, Form, ErrorMessage } from './style';
import { useContext } from 'react';
import { AuthContext } from '../../context/user';

const Login = ({ setIsOpen }) => {
  const { login, errorStatus, setErrorStatus, auth } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    login(username, password);

    setUsername('');
    setPassword('');
  }

  return (
    !auth && (
      <LoginContainer>
        <div>
          <BtnClose onClick={() => setIsOpen(false)}>X</BtnClose>
          <Content>
            <span>Entrar ou Cadastrar usuário</span>
            <h2>
              Bem-vindo ao <span>Hotel.com</span>
            </h2>
            <Form
              onSubmit={(e) => handleSubmit(e)}
              onClick={() => setErrorStatus('')}
            >
              <div>
                <label>
                  Email
                  <input
                    type='email'
                    placeholder='nome@nome.com'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
                <label>
                  Senha
                  <input
                    type='password'
                    placeholder='******'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <button>Enviar</button>
            </Form>
            <ErrorMessage>{errorStatus}</ErrorMessage>
          </Content>
        </div>
      </LoginContainer>
    )
  );
};

export default Login;
