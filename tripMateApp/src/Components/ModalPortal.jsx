import { createPortal } from "react-dom";

export default function ModalPortal({ children }) {
  const element = document.getElementById("modal");
  return createPortal(children, element);
}