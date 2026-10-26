import { useState } from "react";
import { rfps } from "../../shared/data";
import { Badge, Tabs, Title } from "../../shared/ui/ui";
import Cta from "../../widgets/cta";

export default function Rfps() {
  const [t, setT] = useState("All");
  return (
    <div className="wrap narrow">
      <Title
        h="Discover initiatives (RFPs)"
        sub="Problems the community wants solved. Pick one and apply."
      />
      <Tabs
        items={["All", "Open", "In progress", "Completed"]}
        value={t}
        onChange={setT}
      />
      <div className="list">
        {rfps
          .filter((r) => t === "All" || r.status === t)
          .map((r) => (
            <article key={r.title} className="lrow">
              <div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <span className="meta">{r.meta}</span>
              </div>
              <Badge s={r.status} />
            </article>
          ))}
      </div>
      <Cta />
    </div>
  );
}
