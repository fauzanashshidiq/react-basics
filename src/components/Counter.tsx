const Counter = () => {
  const handleDecreament = () => {
    alert("decreament");
  };
  const handleIncreament = () => {
    alert("decreament");
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <button onClick={handleDecreament}>Kurang</button>
      <p>0</p>
      <button onClick={handleIncreament}>Tambah</button>
    </div>
  );
};

export default Counter;
