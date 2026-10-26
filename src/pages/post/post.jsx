import { useLoaderData } from 'react-router-dom'
import { grants } from '../../shared/data'
import { Back } from '../../shared/ui/ui'
import GrantCard from '../../entities/grant/grant-card'
import Cta from '../../widgets/cta'

export default function Post() {
  const p = useLoaderData()
  return (
    <div className="wrap narrow">
      <Back />
      <h1 className="c">{p.title}</h1>
      <p className="c meta">By <span className="chip">Grants team</span> · {p.date}</p>
      {p.cover && <div className="cover big"><span>{p.title}</span></div>}
      <article className="txt post">
        <p>This round the committee reviewed new proposals against the public selection criteria.</p>
        <h2>What was approved</h2>
        <p>Projects that make trading, data access and onboarding better for the community.</p>
        <blockquote>Small teams with a clear milestone plan moved fastest.</blockquote>
        <h3>Next steps</h3>
        <p>Approved teams receive the first payment once their milestone plan is confirmed.</p>
      </article>
      <h2 className="c">Funded grants</h2>
      <div className="g2">{grants.slice(0, 4).map((g) => <GrantCard key={g.id} g={g} />)}</div>
      <Cta />
    </div>
  )
}
