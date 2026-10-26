import { useState } from 'react'

export default function ApplyForm({ onDone }) {
  const [err, setErr] = useState({})
  const [ok, setOk] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.target))
    const n = {}
    if (!f.name.trim()) n.name = 'Enter your name'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) n.email = 'Enter a valid email'
    if (!f.about.trim()) n.about = 'Tell us about yourself'
    setErr(n)
    if (!Object.keys(n).length) { setOk(true); onDone?.() }
  }
  if (ok) return <div className="success"><div className="coin">✓</div><h3>Application sent</h3><p>We will reply by email after the next review round.</p></div>
  return (
    <form className="form" onSubmit={submit} noValidate>
      <label>Name*<input name="name" />{err.name && <em>{err.name}</em>}</label>
      <label>Email*<input name="email" type="email" />{err.email && <em>{err.email}</em>}</label>
      <label>About you*<textarea name="about" rows="4" />{err.about && <em>{err.about}</em>}<small>Who you are and what you have built.</small></label>
      <label>Additional info<textarea name="more" rows="3" /></label>
      <button className="btn">Send application</button>
    </form>
  )
}
