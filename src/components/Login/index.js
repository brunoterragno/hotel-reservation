import React, { useState } from 'react';
import { LoginContainer, BtnClose, Content, Form, BtnUser } from './style';

const Login = ({ setIsOpen }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState(false);

  return (
    <LoginContainer>
      <div>
        <BtnClose onClick={() => setIsOpen(false)}>X</BtnClose>
        <Content>
          <span>Entrar ou Cadastrar usuário</span>
          <h2>
            Bem-vindo ao <span>Hotel.com</span>
          </h2>
          <Form>
            <div>
              {newUser && (
                <label>
                  Nome
                  <input
                    type='text'
                    placeholder='Nome'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              )}
              <label>
                Email
                <input
                  type='text'
                  placeholder='nome@nome.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
          <BtnUser onClick={() => setNewUser(!newUser)}>
            {newUser ? 'Faça Login' : 'Cadastre-se'}
          </BtnUser>
        </Content>
      </div>
    </LoginContainer>
  );
};

export default Login;
