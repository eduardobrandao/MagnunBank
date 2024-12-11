import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { mockRegister } from "../services/auth";

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

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
`;

const Register: React.FC = () => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    const success = await mockRegister(cpf, password);
    if (success) {
      alert("Usuário registrado com sucesso!");
      navigate("/login");
    } else {
      alert("Erro: E-mail já cadastrado.");
    }
  };

  return (
    <RegisterContainer>
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
        <input
          type="password"
          placeholder="Confirme sua senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>
    </RegisterContainer>
  );
};

export default Register;
