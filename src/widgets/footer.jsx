import { Link } from 'react-router-dom'
import logo from '../shared/assets/logo.svg'

export default function Footer() {
  return (
    <footer className="ftr">
      <img src={logo} alt="dYdX" width="28" />
      <nav>
        <Link to="/">About</Link><Link to="/faq">FAQ</Link><Link to="/brand">Brand assets</Link>
        <a href="https://dydx.foundation" target="_blank" rel="noreferrer">dYdX Foundation ↗</a>
        <a href="https://dydx.trade" target="_blank" rel="noreferrer">Trading ↗</a>
      </nav>
      <span><a href="https://twitter.com/dydx" target="_blank" rel="noreferrer">Twitter</a> <a href="https://discord.gg/dydx" target="_blank" rel="noreferrer">Discord</a></span>
    </footer>
  )
}
