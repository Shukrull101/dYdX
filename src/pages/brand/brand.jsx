import { Title } from '../../shared/ui/ui'

const svg = (bg, fg) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="${bg}"/><path d="M30 30l60 60M90 30L30 90" stroke="${fg}" stroke-width="12" stroke-linecap="round"/></svg>`
const items = [['Logo on dark', '#1C1C28', '#6966FF'], ['Logo on light', '#fff', '#6966FF'], ['Avatar light', '#fff', '#1C1C28'], ['Avatar dark', '#2D2D3D', '#fff']]
const dl = (name, bg, fg) => {
  const a = document.createElement('a')
  a.href = URL.createObjectURL(new Blob([svg(bg, fg)], { type: 'image/svg+xml' }))
  a.download = name.replace(/\s/g, '-').toLowerCase() + '.svg'; a.click()
}
export default function Brand() {
  return (
    <div className="wrap narrow">
      <Title h="Brand assets" sub="Use the official marks when you write about the program." />
      <div className="g2">{items.map(([n, bg, fg]) => (
        <figure key={n} className="asset"><div style={{ background: bg }} dangerouslySetInnerHTML={{ __html: svg(bg, fg) }} /><button onClick={() => dl(n, bg, fg)} aria-label={'Download ' + n}>⬇</button><figcaption>{n}</figcaption></figure>))}
      </div>
    </div>
  )
}
