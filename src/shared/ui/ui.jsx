import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useRouteError } from 'react-router-dom'
import { grantees } from '../data'

export const ModalCtx = createContext({})
export const useModals = () => useContext(ModalCtx)

export function Modal({ onClose, full, children }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [onClose])
  return (
    <div className="backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className={'modal' + (full ? ' full' : '')} onClick={(e) => e.stopPropagation()}>
        <button className="x" onClick={onClose} aria-label="Close">✕</button>{children}
      </div>
    </div>
  )
}

export function Tilt({ children, className = '', max = 10 }) {
  const r = useRef()
  const move = (e) => {
    const b = r.current.getBoundingClientRect()
    const x = (e.clientX - b.left) / b.width - 0.5, y = (e.clientY - b.top) / b.height - 0.5
    r.current.style.transform = `perspective(800px) rotateX(${-y * max}deg) rotateY(${x * max}deg)`
  }
  return <div ref={r} className={'tilt ' + className} onMouseMove={move} onMouseLeave={() => (r.current.style.transform = '')}>{children}</div>
}

export const Badge = ({ s }) => <span className={'badge ' + s.replace(' ', '')}>{s}{s === 'Completed' ? ' ✓' : ''}</span>
export const Avatar = ({ id }) => { const g = grantees.find((x) => x.id === id); return <i className="av" style={{ background: g.color }} title={g.name}>{g.name[0]}</i> }
export const Title = ({ h, sub, children }) => <header className="title"><h1>{h}</h1>{sub && <p>{sub}</p>}{children}</header>
export const Back = () => { const n = useNavigate(); return <button className="back" onClick={() => n(-1)} aria-label="Back">←</button> }

export function Tabs({ items, value, onChange }) {
  return <div className="tabs">{items.map((t) => <button key={t} className={t === value ? 'on' : ''} onClick={() => onChange(t)}>{t}</button>)}</div>
}

export function Accordion({ items }) {
  const [open, setOpen] = useState(-1)
  return (
    <div className="acc">{items.map(([q, a], i) => (
      <div key={q} className={'acc-i' + (open === i ? ' open' : '')}>
        <button onClick={() => setOpen(open === i ? -1 : i)}>{q}<span>+</span></button>
        <div className="acc-b"><p>{a}</p></div>
      </div>))}
    </div>
  )
}

export function NotFound() {
  const e = useRouteError()
  return <div className="nf"><h1>{e?.status || 404}</h1><p>Page not found</p><Link className="btn" to="/">Go home</Link></div>
}
