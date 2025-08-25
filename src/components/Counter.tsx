const Counter = () => {
  let count = 0;

  const handleDecreament = () => {
    alert("decreament");
    count -= 1;
  };
  const handleIncreament = () => {
    alert("decreament");
    count += 1;
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <button onClick={handleDecreament}>Kurang</button>
      <p style={{ fontSize: "40px" }}>{count}</p>
      <button onClick={handleIncreament}>Tambah</button>
    </div>
  );
};

export default Counter;
