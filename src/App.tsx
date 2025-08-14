import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <Header />
      <div style={{ gap: "8px", display: "flex", flexDirection: "row" }}>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </>
  );
}

export default App;
