import { useRef } from "react";
import { Link } from "react-router-dom";
import { grants, posts, faq } from "../../shared/data";
import { Accordion, Tilt, useModals } from "../../shared/ui/ui";
import GrantCard from "../../entities/grant/grant-card";
import Cta from "../../widgets/cta";

const stats = [
  ["$1.2M", "granted"],
  ["48", "projects funded"],
  ["9", "funding rounds"],
];
const steps = [
  ["1", "Apply", "Send a short proposal."],
  ["2", "Interview", "Meet the committee."],
  ["3", "Grant offer", "Get funded in milestones."],
];

export default function Home() {
  const { openApply } = useModals();
  const row = useRef();
  return (
    <>
      <section className="hero">
        <div className="scene" aria-hidden="true">
          {/* tilt3d держит наклон, cube крутится только вокруг оси Y */}
          <div className="tilt3d">
            <div className="cube">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <i key={i} className={"f f" + i} />
              ))}
            </div>
          </div>
        </div>
        <h1>Powering the future of dYdX through community grants</h1>
        <p>
          Funding builders who make the protocol easier to use, trade on and
          understand.
        </p>
        <div className="row">
          <Link className="btn ghost" to="/rfps">
            Discover RFPs
          </Link>
          <button className="btn" onClick={openApply}>
            Apply for a grant
          </button>
        </div>
        <div className="stats">
          {stats.map(([n, l]) => (
            <div key={l}>
              <b>{n}</b>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="wrap wide">
        <h2 className="c">Projects built with grants</h2>
        <Link className="c lnk" to="/grants">
          View all grants
        </Link>
        <div className="car" ref={row}>
          {grants.map((g) => (
            <GrantCard key={g.id} g={g} />
          ))}
        </div>
        <button
          className="next"
          onClick={() =>
            row.current.scrollBy({ left: 340, behavior: "smooth" })
          }
          aria-label="Next"
        >
          →
        </button>
      </section>
      <section className="wrap">
        <h2 className="c">What’s new?</h2>
        <Link className="c lnk" to="/blog">
          Read the blog
        </Link>
        <div className="g2">
          {posts.slice(0, 2).map((p) => (
            <PostCard key={p.id} p={p} />
          ))}
        </div>
      </section>
      <section className="wrap narrow">
        <h2 className="c">Frequently asked questions</h2>
        <Accordion items={faq} />
      </section>
      <section className="wrap">
        <h2 className="c">Application process</h2>
        <div className="steps">
          {steps.map(([n, t, d], i) => (
            <Tilt key={n} max={18} className={"step s" + i}>
              <b>{n}</b>
              <h3>{t}</h3>
              <p>{d}</p>
            </Tilt>
          ))}
        </div>
      </section>
      <div className="wrap">
        <Cta />
      </div>
    </>
  );
}
export function PostCard({ p }) {
  return (
    <Tilt className="pcard">
      <Link to={`/blog/${p.id}`}>
        <div className="cover">
          <span>{p.title}</span>
        </div>
        <small>{p.cat}</small>
        <h3>{p.title}</h3>
        <span className="meta">{p.date}</span>
      </Link>
    </Tilt>
  );
} 