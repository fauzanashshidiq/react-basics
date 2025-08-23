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
    <>
      <Header />
      <div style={{ gap: "8px", display: "flex", flexDirection: "row" }}>
        {teachers.map((teacher) => {
          return (
            <ProfileCard
              name={teacher.name}
              year={teacher.year}
              job={teacher.job}
              key={teacher.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
