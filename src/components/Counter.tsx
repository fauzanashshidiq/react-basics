const Counter = () => {
  let count = 0;

  const handleDecreament = () => {
    alert("decreament");
  };
  const handleIncreament = () => {
    alert("decreament");
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <button onClick={handleDecreament}>Kurang</button>
      <p>{count}</p>
      <button onClick={handleIncreament}>Tambah</button>
    </div>
  );
};

export default Counter;
