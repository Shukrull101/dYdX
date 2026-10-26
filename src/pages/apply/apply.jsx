import { Link } from 'react-router-dom'
import { faq } from '../../shared/data'
import { Accordion, Title } from '../../shared/ui/ui'
import ApplyForm from '../../features/apply/apply-form'

export default function Apply() {
  return (
    <div className="wrap narrow">
      <Title h="Apply for a grant" sub={<>Read the <Link to="/faq">FAQ</Link> before you apply.</>} />
      <h2>How are grants selected?</h2><Accordion items={faq} />
      <h2>Grant application</h2>
      <div className="paper"><ApplyForm /></div>
    </div>
  )
}
