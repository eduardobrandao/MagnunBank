import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  h2 {
    margin-bottom: 20px;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  label {
    font-size: 14px;
    color: #555;
  }

  input,
  select {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }

  button {
    padding: 12px;
    font-size: 16px;
    background-color: rgb(146, 10, 17);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const TransactionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    amount: "",
    cpfCnpj: "",
    pixKey: "",
    bank: "",
    agency: "",
    account: "",
    transferDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Transaction Data:", formData);
    alert("Transação enviada com sucesso!");
  };

  return (
    <FormContainer>
      <h2>Realizar Transação</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Valor a transferir</label>
        <input
          id="amount"
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          required
        />

        <label htmlFor="cpfCnpj">CPF/CNPJ</label>
        <input
          id="cpfCnpj"
          name="cpfCnpj"
          type="text"
          value={formData.cpfCnpj}
          onChange={handleChange}
          required
        />

        <label htmlFor="pixKey">Chave PIX</label>
        <input
          id="pixKey"
          name="pixKey"
          type="text"
          value={formData.pixKey}
          onChange={handleChange}
        />

        <label htmlFor="bank">Banco</label>
        <input
          id="bank"
          name="bank"
          type="text"
          value={formData.bank}
          onChange={handleChange}
        />

        <label htmlFor="agency">Agência</label>
        <input
          id="agency"
          name="agency"
          type="text"
          value={formData.agency}
          onChange={handleChange}
        />

        <label htmlFor="account">Conta</label>
        <input
          id="account"
          name="account"
          type="text"
          value={formData.account}
          onChange={handleChange}
        />

        <label htmlFor="transferDate">Data da Transferência</label>
        <input
          id="transferDate"
          name="transferDate"
          type="date"
          value={formData.transferDate}
          onChange={handleChange}
        />

        <button type="submit">Enviar</button>
      </form>
    </FormContainer>
  );
};

export default TransactionForm;
