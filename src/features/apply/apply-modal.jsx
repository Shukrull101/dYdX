import { Modal } from "../../shared/ui/ui";
import ApplyForm from "./apply-form";
export default function ApplyModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2>Apply for a grant</h2>
      <ApplyForm />
    </Modal>
  );
}
