import Counter from "./components/Counter";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

type Teacher = {
  name: string;
  job: string;
  year: number;
  id: number;
};

const teachers: Teacher[] = [
  {
    job: "Dosen",
    name: "Pak Dhika",
    year: 1995,
    id: 1,
  },
  {
    name: "Fauzan",
    job: "Student",
    year: 2003,
    id: 2,
  },
  {
    name: "Yaree",
    job: "Pengangguran",
    year: 2003,
    id: 3,
  },
];

function App() {
  return (
    <div style={{ padding: "16px 48px" }}>
      <Header />
      {/* <div style={{ gap: "8px", display: "flex", flexDirection: "row" }}>
      </div> */}
      <Counter />
    </div>
  );
}

export default App;
