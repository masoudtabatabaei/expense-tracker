import DeleteIcon from "../assets/img/delete.png";

const TransactionItem = ({
  transaction,
  transactionTypeClass,
  handleDelete,
}) => {
  return (
    <div
      key={new Date().getTime() + Math.random()}
      className={"d-flex " + transactionTypeClass}
    >
      <div className="d-flex item--title">
        <span
          style={{ cursor: "pointer" }}
          onClick={() => handleDelete(transaction)}
        >
          <img src={DeleteIcon} alt="Delete Item" />
        </span>
        <h4>{transaction.title}</h4>
      </div>
      <div className="bold">${transaction.amount}</div>
    </div>
  );
};

export default TransactionItem;
