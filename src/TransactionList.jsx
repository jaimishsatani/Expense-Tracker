import "./app.css";

const TransactionList = ({ transactions, deleteTransaction, editTransaction }) => {
  return (
    <div className="card">
      <h3>Recent Transactions</h3>
      {transactions.length === 0 ? <p>No transactions yet.</p> : null}
      {transactions.map((transaction) => (
        <div key={transaction.id} className="transaction">
          <div>
            <span className="desc">{transaction.description}</span>
            <p style={{ fontSize: "0.8rem", color: "#666", margin: "2px 0" }}>
              {transaction.date ? transaction.date : "No Date Available"}
            </p>
          </div>
          <span className={transaction.type === "credit" ? "credit" : "debit"}>
            {transaction.type === "credit" ? "+" : "-"}₹{transaction.amount}
          </span>
          <div className="actions">
            <button className="edit" onClick={() => editTransaction(transaction)}>✏️</button>
            <button className="delete" onClick={() => deleteTransaction(transaction.id)}>🗑</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
