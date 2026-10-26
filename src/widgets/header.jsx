import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../shared/assets/logo.svg'
import { Modal, useModals } from '../shared/ui/ui'

export const nav = [['Discover initiatives', '/rfps'], ['Funded grants', '/grants'], ['Program expenses', '/expenses'], ['Blog', '/blog'], ['FAQ', '/faq']]

export default function Header() {
  const { openApply } = useModals()
  const [menu, setMenu] = useState(false)
  return (
    <header className="hdr">
      <Link to="/" className="logo"><img src={logo} alt="" />dYdX <b>grants</b></Link>
      <nav className="desk">{nav.map(([t, to]) => <NavLink key={to} to={to}>{t}</NavLink>)}</nav>
      <div className="hdr-r">
        <button className="btn" onClick={openApply}><span className="long">Apply for a grant</span><span className="short">Apply</span></button>
        <button className="burger" onClick={() => setMenu(true)} aria-label="Menu">☰</button>
      </div>
      {menu && (
        <Modal full onClose={() => setMenu(false)}>
          <nav className="mnav">{nav.map(([t, to]) => <NavLink key={to} to={to} onClick={() => setMenu(false)}>{t}</NavLink>)}</nav>
        </Modal>
      )}
    </header>
  )
}
