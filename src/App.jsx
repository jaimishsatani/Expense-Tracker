import { useState, useEffect } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import BalanceCard from "./BalanceCard";
import "./app.css";

function App() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );
  const [editTransactionData, setEditTransactionData] = useState(null);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const editTransaction = (transaction) => {
    setEditTransactionData(transaction);
  };

  const updateTransaction = (updatedTransaction) => {
    setTransactions(
      transactions.map((t) => (t.id === updatedTransaction.id ? updatedTransaction : t))
    );
    setEditTransactionData(null);
  };

  return (
    <div className="container">
      <h1>
        <span className="brown">Expense</span> <span className="green">Tracker</span>
      </h1>
      <div className="grid">
        <TransactionForm 
          addTransaction={addTransaction} 
          updateTransaction={updateTransaction} 
          editTransactionData={editTransactionData} 
        />
        <TransactionList 
          transactions={transactions} 
          deleteTransaction={deleteTransaction} 
          editTransaction={editTransaction} 
        />
      </div>
      <BalanceCard transactions={transactions} />
    </div>
  );
}

export default App;
