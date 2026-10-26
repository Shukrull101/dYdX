import { faq } from '../../shared/data'
import { Accordion, Title } from '../../shared/ui/ui'
import Cta from '../../widgets/cta'

export default function Faq() {
  return (
    <div className="wrap narrow">
      <Title h="Frequently asked questions" />
      {['Grant application process', 'Selection criteria', 'The Grants Trust'].map((g, i) => <section key={g}><h3>{g}</h3><Accordion items={faq.slice(i, i + 4)} /></section>)}
      <Cta />
    </div>
  )
}
