import React from "react";
import styled from "styled-components";
import TransactionForm from "../components/TransactionForm";

const TransactionsContainer = styled.div`
  padding: 20px;
`;

const Transactions: React.FC = () => {
  return (
    <TransactionsContainer>
      <TransactionForm />
    </TransactionsContainer>
  );
};

export default Transactions;
