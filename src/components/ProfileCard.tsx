type ProfileCardProps = {
  name: string;
  year: number;
  job?: string;
};

const ProfileCard = (props: ProfileCardProps) => {
  return (
    <div className="card">
      <p>Nama: {props.name}</p>
      <p>Birth Year: {props.year}</p>
      {props.job ? <p>Job: {props.job}</p> : null}
    </div>
  );
};

export default ProfileCard;
