const Table = (props) => {
  const { list, removeHandler, total } = props;

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Details</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, i) => (
              <tr key={i}>
                <td>{item.date}</td>
                <td>{item.title}</td>
                <td>{item.details}</td>
                <td>{item.amount}</td>
                <td>
                  <button
                    onClick={() => removeHandler(i)}
                    className="btn btn-outline btn-error"
                  >
                    {" "}
                    X
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <th></th>
              <th></th>
              <th className="text-lg">Total</th>
              <th className="text-lg">{total > 0 ? total : 0}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
