import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
//import axios from "axios";

const HomeContainer = styled.div`
  padding: 20px;
`;

const Home: React.FC = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  //useEffect(() => {
  //axios.get("/api/balance").then((res) => setBalance(res.data.balance));
  //axios.get("/api/transactions").then((res) => setTransactions(res.data));
  //}, []);

  return (
    <HomeContainer>
      <h1>Saldo: R$ {balance.toFixed(2)}</h1>
      <h2>Últimas Transações</h2>
      <ul>
        {transactions.map((transaction: any, index) => (
          <li key={index}>
            {transaction.date} - R$ {transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </HomeContainer>
  );
};

export default Home;
