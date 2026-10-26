import { Link } from "react-router-dom";
import { Tilt, Avatar } from "../../shared/ui/ui";
import { money } from "../../shared/data";

export default function GrantCard({ g }) {
  return (
    <Tilt className="gcard">
      <Link to={`/grants/${g.id}`}>
        <small>{g.cat}</small>
        <h3>{g.title}</h3>
        <span className="meta">
          {g.date} · {money(g.amount)}
        </span>
        <p>{g.text}</p>
        <div className="avs">
          {g.team.map((t) => (
            <Avatar key={t} id={t} />
          ))}
        </div>
      </Link>
    </Tilt>
  );
}
