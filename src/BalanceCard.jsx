import "./App.css";

const BalanceCard = ({ transactions }) => {
  const totalBalance = transactions.reduce((acc, t) => (t.type === "credit" ? acc + t.amount : acc - t.amount), 0);
  const income = transactions.filter((t) => t.type === "credit").reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions.filter((t) => t.type === "debit").reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="card balance-card">
      <h3>Total Balance</h3>
      <h2 className={totalBalance >= 0 ? "credit" : "debit"}>₹{totalBalance}</h2>
      <div className="split">
        <span className="income">Income: ₹{income}</span>
        <span className="expenses">Expenses: ₹{expenses}</span>
      </div>
    </div>
  );
};

export default BalanceCard;
