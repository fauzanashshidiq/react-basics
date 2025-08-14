import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <Header />
      <div style={{ gap: "8px", display: "flex", flexDirection: "row" }}>
        <ProfileCard name="Fauzan" job="Student" year={2003} />
        <ProfileCard name="Pak Dika" job="Dosen" year={1990} />
        <ProfileCard name="Theo" job="Content Creator" year={200} />
        <ProfileCard name="Yaree" year={2003} />
      </div>
    </>
  );
}

export default App;
