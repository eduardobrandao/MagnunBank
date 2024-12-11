import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logoMagnun.svg";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { mockLogin } from "../services/auth";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    width: 150px; /* Ajuste o tamanho da logo */
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 16px;
  }

  input {
    padding: 10px;
    font-size: 16px;
  }

  button {
    padding: 10px;
    font-size: 16px;
    color: white;
    background: rgb(146, 10, 17);
    border: none;
  }
  .register-link {
    margin-top: 10px;
    font-size: 14px;
    text-align: center;

    a {
      color: #007bff;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;

const Login: React.FC = () => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await mockLogin(cpf, password);

    if (response) {
      localStorage.setItem("token", response.token);
      navigate("/home");
    } else {
      alert("Erro: E-mail ou senha incorretos");
    }
  };

  return (
    <LoginContainer>
      <img src={logo} alt="Logo do Banco" />
      <form onSubmit={handleSubmit}>
        <input
          type="cpf"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      <div className="register-link">
        <Link to="/register">Registrar-se</Link>
      </div>
    </LoginContainer>
  );
};

export default Login;
