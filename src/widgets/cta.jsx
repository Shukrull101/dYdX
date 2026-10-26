import { useModals } from '../shared/ui/ui'
export default function Cta() {
  const { openApply } = useModals()
  return (
    <section className="cta"><small>Have a project in mind?</small><h2>Let’s create something awesome.</h2><button className="btn white" onClick={openApply}>Apply for a grant</button></section>
  )
}
