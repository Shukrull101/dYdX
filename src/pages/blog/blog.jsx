import { useState } from "react";
import { posts } from "../../shared/data";
import { Tabs, Title } from "../../shared/ui/ui";
import { PostCard } from "../homepage/homepage";

export default function Blog() {
  const [t, setT] = useState("All");
  const [n, setN] = useState(4);
  const list = posts.filter((p) => t === "All" || p.cat === t);
  return (
    <div className="wrap wide">
      <Title h="Blog" />
      <Tabs
        items={["All", ...new Set(posts.map((p) => p.cat))]}
        value={t}
        onChange={(v) => {
          setT(v);
          setN(4);
        }}
      />
      <div className="g2">
        {list.slice(0, n).map((p) => (
          <PostCard key={p.id} p={p} />
        ))}
      </div>
      {n < list.length && (
        <div className="c">
          <button className="btn ghost" onClick={() => setN(n + 2)}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
