import { useState } from "react";
import { expenses, money } from "../../shared/data";
import { Tabs, Title } from "../../shared/ui/ui";

export default function Expenses() {
  const [t, setT] = useState("All");
  return (
    <div className="wrap narrow">
      <Title h="Program expenses" />
      <Tabs
        items={["All", "Grants", "Budget", "Payouts", "Operations"]}
        value={t}
        onChange={setT}
      />
      <div className="list">
        {expenses
          .filter((e) => t === "All" || e.cat === t)
          .map((e, i) => (
            <article key={i} className="lrow slim">
              <div>
                <h3>{e.title}</h3>
                <span className="meta">
                  {e.cat} · {e.date}
                </span>
              </div>
              <a
                className="meta"
                href="https://etherscan.io"
                target="_blank"
                rel="noreferrer"
              >
                {money(e.amount)} ↗
              </a>
            </article>
          ))}
      </div>
    </div>
  );
}
