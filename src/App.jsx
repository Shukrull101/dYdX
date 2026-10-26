import { useState } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from './widgets/header'
import Footer from './widgets/footer'
import ApplyModal from './features/apply/apply-modal'
import { ModalCtx } from './shared/ui/ui'

export default function App() {
  const [apply, setApply] = useState(false)
  return (
    <ModalCtx.Provider value={{ openApply: () => setApply(true) }}>
      <Header />
      <main><Outlet /></main>
      <Footer />
      {apply && <ApplyModal onClose={() => setApply(false)} />}
      <ScrollRestoration />
    </ModalCtx.Provider>
  )
}
