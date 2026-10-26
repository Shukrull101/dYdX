import { useState } from 'react'
import { grants } from '../../shared/data'
import { Tabs, Title } from '../../shared/ui/ui'
import GrantCard from '../../entities/grant/grant-card'
import Cta from '../../widgets/cta'

export default function Grants() {
  const [t, setT] = useState('All')
  const [done, setDone] = useState(true)
  const cats = ['All', ...new Set(grants.map((g) => g.cat))]
  const list = grants.filter((g) => (t === 'All' || g.cat === t) && (done || g.status !== 'Completed'))
  return (
    <div className="wrap wide">
      <Title h="Funded grants" />
      <Tabs items={cats} value={t} onChange={setT} />
      <label className="sw"><input type="checkbox" checked={done} onChange={(e) => setDone(e.target.checked)} />Show completed</label>
      <div className="g3">{list.map((g) => <GrantCard key={g.id} g={g} />)}</div>
      <Cta />
    </div>
  )
}
