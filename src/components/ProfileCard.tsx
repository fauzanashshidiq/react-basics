function ProfileCard() {
  const name = "Fauzan";
  const year = 2003;
  const job = "Student";

  return (
    <div className="card">
      <p>Nama: {name}</p>
      <p>Birth Year: {year}</p>
      <p>Job: {job}</p>
    </div>
  );
}

export default ProfileCard;
