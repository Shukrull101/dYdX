import { Link, useLoaderData } from 'react-router-dom'
import { grants, grantees, money } from '../../shared/data'
import { Avatar, Back, Badge } from '../../shared/ui/ui'
import GrantCard from '../../entities/grant/grant-card'
import Cta from '../../widgets/cta'

const parts = ['Description', 'Purpose', 'Execution', 'Payment schedule']
export default function Grant() {
  const g = useLoaderData()
  const more = grants.filter((x) => x.id !== g.id).slice(0, 2)
  return (
    <div className="wrap narrow">
      <Back />
      {g.cover && <div className="cover big"><span>{g.title}</span></div>}
      <small className="c2">{g.cat}</small>
      <div className="gh"><h1>{g.title}</h1><a className="btn" href="https://dydx.exchange" target="_blank" rel="noreferrer">Visit ↗</a></div>
      <p className="meta"><Badge s={g.status} /> Funding amount: {money(g.amount)} · {g.date}</p>
      <h4>Team</h4>
      <div className="chips">{g.team.map((id) => <Link key={id} to={`/grantee/${id}`} className="chip"><Avatar id={id} />{grantees.find((x) => x.id === id).name}</Link>)}</div>
      {parts.map((p) => <section key={p} className="txt"><h4>{p}</h4><p>{g.text}</p></section>)}
      <h4>Funding transactions</h4>
      {['Round 9', 'Funding title'].map((r, i) => <div key={r} className="lrow slim"><div><h3>{r}</h3><span className="meta">Tx {i + 1}</span></div><span className="meta">{money(g.amount / 2)} ↗</span></div>)}
      <h2 className="c">More grants like this</h2>
      <div className="g2">{more.map((x) => <GrantCard key={x.id} g={x} />)}</div>
      <Cta />
    </div>
  )
}
