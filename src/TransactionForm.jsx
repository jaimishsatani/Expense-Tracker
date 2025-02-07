import { useState, useEffect } from "react";

function TransactionForm({ addTransaction, updateTransaction, editTransactionData }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("credit");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editTransactionData) {
      setDescription(editTransactionData.description);
      setAmount(editTransactionData.amount);
      setType(editTransactionData.type);
      setDate(editTransactionData.date);
    }
  }, [editTransactionData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionData = {
      id: editTransactionData ? editTransactionData.id : Date.now(),
      description,
      amount: parseFloat(amount),
      type,
      date
    };

    if (editTransactionData) {
      updateTransaction(transactionData);
    } else {
      addTransaction(transactionData);
    }

    setDescription("");
    setAmount("");
    setType("credit");
    setDate("");
  };

  return (
    <div className="card">
      <form className="transaction-form" onSubmit={handleSubmit}>
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Amount</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} min={0}required />

        <label>Type</label>
        <div className="radio-group">
          <label>
            <input type="radio" value="debit" checked={type === "debit"} onChange={() => setType("debit")} />
            Debit
          </label>
          <label>
            <input type="radio" value="credit" checked={type === "credit"} onChange={() => setType("credit")} />
            Credit
          </label>
        </div>

        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <button type="submit">{editTransactionData ? "Update Transaction" : "Add Transaction"}</button>
      </form>
    </div>
  );
}

export default TransactionForm;
