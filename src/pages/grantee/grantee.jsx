import { useLoaderData } from "react-router-dom";
import { grants } from "../../shared/data";
import { Back } from "../../shared/ui/ui";
import GrantCard from "../../entities/grant/grant-card";
import Cta from "../../widgets/cta";

export default function Grantee() {
  const p = useLoaderData();
  return (
    <div className="wrap wide">
      <Back />
      <div className="person">
        <i className="av xl" style={{ background: p.color }}>
          {p.name[0]}
        </i>
        <h1>{p.name}</h1>
      </div>
      <div className="narrow wrap">
        <h4>Bio</h4>
        <p className="txt">{p.bio}</p>
        <h4>Links</h4>
        <div className="chips">
          {p.links.map((l) => (
            <a
              key={l}
              className="chip"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
      <h2 className="c">Projects</h2>
      <div className="g2">
        {grants
          .filter((g) => g.team.includes(p.id))
          .map((g) => (
            <GrantCard key={g.id} g={g} />
          ))}
      </div>
      <Cta />
    </div>
  );
}
