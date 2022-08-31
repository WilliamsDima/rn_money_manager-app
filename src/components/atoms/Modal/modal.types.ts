import { Modal } from "react-native"

export interface IModal extends Modal {
  visible: boolean
  closeHandler: () => void
  animationType?: string
}
