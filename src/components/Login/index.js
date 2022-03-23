import React, { useState } from 'react';
import { LoginContainer, BtnClose, Content, Form, ErrorMessage } from './style';
import { useContext } from 'react';
import { AuthContext } from '../../context/user';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const Login = ({ setIsOpen }) => {
  const { userInfo, auth } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorStatus, setErrorStatus] = useState(null);
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

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
      userInfo(response.data);
      return navigate('profile');
    } catch (e) {
      if (e.response.status !== 200) {
        setErrorStatus('Usuário não encontrado');
      }
    } finally {
      setUsername('');
      setPassword('');
    }
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
